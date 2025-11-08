# 1) deps stage: install node_modules
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 2) build stage: build the app (generate standalone output)
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Configure Next.js to generate a standalone bundle
# (If you don't have next.config.js, it will still work fine by default)
# If needed, add this to next.config.js: module.exports = { output: 'standalone' }
RUN npm run build

# 3) run stage: minimal runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Copy only what’s required for the standalone structure
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]

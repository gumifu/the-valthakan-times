/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      boxShadow: {
        indigoGlow: "0 0 20px rgba(var(--color-indigo-600), 0.5)",
        yellowGlow: "0 0 20px rgba(var(--color-yellow-500), 0.5)",
        whiteglow: "0 0 30px rgba(var(--color-palette-white), 0.5)",
      },
    },
  },
  plugins: [],
};

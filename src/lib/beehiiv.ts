const API_BASE = "https://api.beehiiv.com/v2";

export type BeehiivPost = {
  id: string;
  title: string;
  subtitle?: string | null;
  slug?: string | null;
  thumbnail_url?: string | null;
  web_url?: string | null;
  publish_date?: number | null; // unix timestamp (seconds)
  displayed_date?: number | null;
  status?: string;
  authors?: string[];
  meta_default_title?: string;
  meta_default_description?: string;
};

export type EditionCardItem = {
  id: string;
  href: string;
  imageSrc: string;
  editionNumber: number | string;
  tag?: string;
  dateISO?: string;
  title: string;
  subtitle?: string;
};

// Mock dataset used when API is unavailable or returns no posts
const MOCK_ITEMS: EditionCardItem[] = Array.from({ length: 5 }).map((_, i) => {
  const n = 82 - i;
  return {
    id: `${n}`,
    href: `/editions/${n}`,
    imageSrc: "/card_img.png",
    editionNumber: n,
    tag: "Monthly Edition",
    dateISO: "2024-01-24",
    title: `Edition #${n}: An Extravagant Addition`,
    subtitle: "I Need Your Eyeballs",
  };
});

/**
 * Fetch newest posts from Beehiiv (falls back to mock data when unavailable)
 */
export async function fetchLatestEditions(limit = 5): Promise<EditionCardItem[]> {
  const key = process.env.BEEHIIV_API_KEY || "";
  const rawPub = "pub_" + process.env.BEEHIIV_PUBLICATION_ID || "";
  const useMock = process.env.USE_MOCK_DATA === "true";

  // If explicitly using mock OR missing credentials → return mock
  if (useMock || !key || !rawPub) {
    console.warn("[beehiiv] Using mock items (USE_MOCK_DATA=true or missing env vars).");
    return MOCK_ITEMS.slice(0, limit);
  }

  // Normalize publication id (accept both "pub_XXXX" and "XXXX")
  const pub = rawPub.startsWith("pub_") ? rawPub : `pub_${rawPub}`;

  // Real API request
  const url = `${API_BASE}/publications/${pub}/posts?status=confirmed&platform=web&limit=${encodeURIComponent(
    String(limit)
  )}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    // Next.js cache hint (optional)
    next: { revalidate: 300 }, // 5 minutes
  });

  if (!res.ok) {
    const text = await res.text();
    console.warn(`[beehiiv] fetch failed: ${res.status} ${text}\n→ Falling back to mock items.`);
    return MOCK_ITEMS.slice(0, limit);
  }

  const json = await res.json();
  const posts = (json?.data ?? []) as BeehiivPost[];

  // If API returns no posts, still fall back to mock to keep UI filled
  if (!Array.isArray(posts) || posts.length === 0) {
    console.warn("[beehiiv] API returned no posts. Falling back to mock items.");
    return MOCK_ITEMS.slice(0, limit);
  }

  return posts.slice(0, limit).map(mapBeehiivToEditionCard);
}

/**
 * Beehiiv response → card component
 */
function mapBeehiivToEditionCard(post: BeehiivPost): EditionCardItem {
  const date = post.displayed_date ?? post.publish_date;
  const dateISO = date ? new Date(date * 1000).toISOString() : undefined;

  return {
    id: post.id,
    href: post.web_url ?? `/editions/${post.slug ?? post.id}`,
    imageSrc: post.thumbnail_url ?? "/card_img.jpg",
    // Try to extract a number from slug (e.g., "edition-82")
    editionNumber: post.slug?.replace(/\D/g, "") || "—",
    tag: "Monthly Edition",
    dateISO,
    title: post.title,
    subtitle: post.subtitle ?? post.meta_default_description ?? "",
  };
}

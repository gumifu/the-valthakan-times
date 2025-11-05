// app/api/test-beehiiv/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = "pub_" + process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      return NextResponse.json(
        { error: "Missing API key or publication ID" },
        { status: 400 }
      );
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/posts?limit=3`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        {
          error: "Beehiiv API request failed",
          status: res.status,
          details: errorText,
        },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      message: "✅ Beehiiv API connection successful!",
      publicationId,
      postCount: data.data?.length || 0,
      samplePostTitles: data.data?.map((p: any) => p.title) || [],
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Unexpected error occurred" },
      { status: 500 }
    );
  }
}

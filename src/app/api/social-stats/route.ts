import { NextResponse } from "next/server";

// Instagram Graph APIからプロフィール情報を取得するAPI
export async function GET() {
  try {
    const instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const instagramUserId = process.env.INSTAGRAM_USER_ID; // Instagram Business Account ID

    let instagramData: {
      followers: number | null;
      mediaCount: number | null;
      username: string | null;
      profilePictureUrl: string | null;
      url: string;
    } = {
      followers: null,
      mediaCount: null,
      username: null,
      profilePictureUrl: null,
      url: "https://www.instagram.com/dalecsander99/",
    };

    // Instagram Graph APIからプロフィール情報を取得
    if (instagramAccessToken && instagramUserId) {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${instagramUserId}?fields=username,account_type,media_count,followers_count,profile_picture_url&access_token=${instagramAccessToken}`
        );

        if (response.ok) {
          const data = await response.json();
          instagramData = {
            followers: data.followers_count || null,
            mediaCount: data.media_count || null,
            username: data.username || null,
            profilePictureUrl: data.profile_picture_url || null,
            url: `https://www.instagram.com/${data.username || "dalecsander99"}/`,
          };
        } else {
          console.error("Instagram API error:", await response.text());
        }
      } catch (error) {
        console.error("Failed to fetch Instagram stats:", error);
      }
    }

    const stats = {
      instagram: instagramData,
    };

    return NextResponse.json(stats);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Unexpected error occurred" },
      { status: 500 }
    );
  }
}


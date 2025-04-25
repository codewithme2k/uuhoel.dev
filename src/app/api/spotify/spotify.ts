const SPOTIFY_TOKEN_API = `https://accounts.spotify.com/api/token`;
const SPOTIFY_NOW_PLAYING_API = `https://api.spotify.com/v1/me/player/currently-playing`;
const SPOTIFY_TOP_TRACKS_API = `https://api.spotify.com/v1/me/top/tracks`;

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  // SPOTIFY_REFRESH_TOKEN: refresh_token = "",
} = process.env;

async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.SPOTIFY_CLIENT_ID!,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("❌ Failed to get access token");
    console.error(await response.text());
    throw new Error("Request failed");
  }

  const data = await response.json();
  return data;
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  const url = new URL(SPOTIFY_NOW_PLAYING_API);
  url.searchParams.append("additional_types", "track,episode");

  const data = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
  console.log(data);
  return data;
}

export async function getTopTracks() {
  const { access_token } = await getAccessToken();

  return fetch(SPOTIFY_TOP_TRACKS_API, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

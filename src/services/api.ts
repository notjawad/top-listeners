const BASE_URL = "https://blank-delta.vercel.app";

export const fetchListeners = async (artist: string, artistId: string) => {
  const url = `${BASE_URL}/api/listeners/${artist}/${artistId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async (userId: string) => {
  const url = `https://api.spotify.com/v1/users/${userId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${Spicetify.Platform.Session.accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserPlaylists = async (userId: string) => {
  const url = `https://api.spotify.com/v1/users/${userId}/playlists`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${Spicetify.Platform.Session.accessToken}`,
      },
    });
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
  }
};

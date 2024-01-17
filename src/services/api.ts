const BASE_URL = "https://blank-delta.vercel.app";

export const fetchListeners = async (artist: string, artistId: string) => {
  const url = `${BASE_URL}/api/listeners/${artist}/${artistId}`;

  Spicetify.showNotification("Fetching listeners...", false, 2000);
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    Spicetify.showNotification(
      `Error fetching listeners: ${error}`,
      true,
      2000
    );
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

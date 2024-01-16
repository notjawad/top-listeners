import "../src/styles/global.css";

import React from "react";

import { fetchListeners } from "./services/api";

import ListenersModal from "./components/listeners-modal";
import { Users } from "./constants/icons";

async function main() {
  while (
    !Spicetify?.Platform ||
    !Spicetify?.CosmosAsync ||
    !Spicetify?.Player ||
    !Spicetify.Topbar
  ) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  const handleClick = async () => {
    const currentTrackArtistData = Spicetify.Player.data.item.artists?.[0];

    const artistName = currentTrackArtistData?.name;
    const artistId = currentTrackArtistData?.uri.split(":")[2];

    if (!artistName || !artistId) {
      return;
    }

    const listeners = await fetchListeners(artistName, artistId);

    Spicetify.PopupModal.display({
      title: "Top Listeners",
      content: (
        <ListenersModal listeners={listeners} artistId={artistId} />
      ) as any,
    });
  };

  const renderButton = () => {
    const randomBtn = new Spicetify.Topbar.Button(
      "Show Top Listeners",
      Users,
      handleClick
    );

    randomBtn.element.id = "random-saved-album-btn";
  };

  renderButton();
}

export default main;

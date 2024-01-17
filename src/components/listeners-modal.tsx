import React, { useState, useEffect } from "react";

import { Listener } from "../interfaces";
import { fetchUser, fetchUserPlaylists } from "../services/api";
import { TbUsers, TbPlaylist } from "react-icons/tb";

interface Props {
  listeners: { items: Listener[] };
  artistId: string;
}

interface User {
  images: { url: string }[];
  followers: { total: number };
  playlists: { length: number };
}

const ListenersModal = ({ listeners, artistId }: Props) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      const usersWithPlaylists = await Promise.all(
        listeners.items
          .slice(indexOfFirstItem, indexOfLastItem)
          .map(async (listener) => {
            const user = await fetchUser(listener.user.id);
            const playlists = await fetchUserPlaylists(listener.user.id);
            return { ...user, playlists };
          })
      );

      setUsers(usersWithPlaylists);
    };

    fetchData();
  }, [currentPage, listeners.items]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const generateDefaultImage = (displayName: string) => {
    return `https://ui-avatars.com/api/?name=${displayName}&background=1cca5a&color=fff&size=128`;
  };

  const handleClick = (
    listener: Listener,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();

    Spicetify.Platform.History.push("/user/" + listener.user.id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listeners.items
    .filter((listener) => listener.user.displayName !== "Private User")
    .slice(indexOfFirstItem, indexOfLastItem);

  const hasNextPage = indexOfLastItem < listeners.items.length;
  const hasPrevPage = currentPage > 1;

  return (
    <div className="listeners-container">
      {currentItems.map((listener, index) => (
        <div
          onClick={(e) => handleClick(listener, e)}
          key={index}
          className="listener-item"
        >
          <div className="listener-info">
            <img
              src={
                users[index]?.images[0]?.url ||
                generateDefaultImage(listener.user.displayName)
              }
              alt={listener.user.displayName}
              className="listener-image"
              onError={(e) => {
                e.currentTarget.onerror = null; // Prevents infinite loop if default image also fails to load
                e.currentTarget.src = generateDefaultImage(
                  listener.user.displayName
                );
              }}
            />
            <div className="listener-details">
              <p className="listener-name">{listener.user.displayName}</p>
              <div className="listener-stats">
                <p>
                  <TbUsers />
                  {users[index]?.followers.total} followers
                </p>
                <p>
                  <TbPlaylist />
                  {users[index]?.playlists.length} playlists
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="pagination-container">
        {hasPrevPage ? (
          <button onClick={() => paginate(currentPage - 1)}>Back</button>
        ) : (
          <button disabled>Back</button>
        )}
        <p>
          {indexOfFirstItem + 1} - {indexOfLastItem} of {listeners.items.length}
        </p>
        {hasNextPage ? (
          <button onClick={() => paginate(currentPage + 1)}>Next</button>
        ) : (
          <button disabled>Next</button>
        )}
      </div>
    </div>
  );
};

export default ListenersModal;

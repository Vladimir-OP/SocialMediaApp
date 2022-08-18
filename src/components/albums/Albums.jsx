import React from "react";
import { useContext, useEffect, useState, useMemo } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../shared/api";
import { AlbumConteiner, AlbumItemsCont } from "./Albums.style";
import Album from "./Album";

/**
 * Creates albums list
 * @returns {component}
 */
const Albums = () => {
  // keep value about opened Album and user info
  const { openAlbum, user } = useContext(UserContext);
  // keep data about albums taken from DB
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      await fetchAlbums;
    })();
  }, []);

  // take data abou albums from DB
  const fetchAlbums = useMemo(async () => {
    try {
      const result = await api("GET", "albums", user.id, "userId");
      const data = result.data;

      setAlbums(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <AlbumConteiner openAlbum={openAlbum}>
      <AlbumItemsCont>
        {albums.length > 0
          ? albums.map((album) => <Album album={album} />)
          : "no albums"}
      </AlbumItemsCont>
    </AlbumConteiner>
  );
};

export default Albums;

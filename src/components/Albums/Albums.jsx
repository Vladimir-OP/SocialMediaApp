import { useContext, useEffect, useState, useMemo } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../../shared/api";
import Album from "../Album/Album";
import { AlbumConteiner, AlbumItemsCont, UserName } from "./Albums.style";

/**
 *  Creates albums list
 *  @returns {component}
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
      const result = await api("GET", "albums", { userId: user.id });
      const data = result.data;

      setAlbums(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <AlbumConteiner openAlbum={openAlbum} >
      <UserName>{user.name} Albums</UserName>
      <AlbumItemsCont data-testid="Albums">
        {albums.length > 0
          ? albums.map((album) => <Album key={album.id} album={album} />)
          : "no albums"}
      </AlbumItemsCont>
    </AlbumConteiner>
  );
};

export default Albums;

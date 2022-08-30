import { useContext, useEffect, useState, useMemo } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../../shared/api";
import Photo from "../Photo/Photo";
import { PhotosCont } from "./photos.style";

/**
 *  Creates photos list
 *  @returns {component}
 */
const Photos = () => {
  console.log("photos rendering");
  // keep album information taken from userContext
  const { album } = useContext(UserContext);
  // keep photos information
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      await fetchPhotos;
    })();
  }, []);
  // take photos from data base with album ID
  const fetchPhotos = useMemo(async () => {
    try {
      const result = await api(
        "GET",
        "photos",
        { albumId: album.id },
        "image/png"
      );
      const data = result.data;
      setPhotos(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [album]);
  return (
    <PhotosCont data-testid="photos">
      {photos.length > 0
        ? photos.map((photo) => <Photo key={photo.id} photo={photo} />)
        : "no photo to show"}
    </PhotosCont>
  );
};

export default Photos;

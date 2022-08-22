import { useContext, useEffect, useState, useMemo } from "react";
import { UserContext } from "../../UserContext";
import { api } from "../../../shared/api";
import { PhotosCont } from "./photos.style";
import Photo from "./Photo";
import axios from "axios";

/**
 *  Creates photos list
 *  @returns {component}
 */
const Photos = () => {
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
      const result = await api("GET", "photos", { albumId: album.id });
      const data = result.data;
      setPhotos(data);
      return data;
    } catch (error) {
      console.log(error);
    }
    axios.interceptors.request.use((value) => {
      value.headers = {
        "Content-Type": "image/png",
      };
      return value;
    });
  }, [album]);
  return (
    <PhotosCont>
      {photos.length > 0
        ? photos.map((photo) => <Photo key={photo.id} photo={photo} />)
        : "no photo to show"}
    </PhotosCont>
  );
};

export default Photos;

import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../UserContext";
import { AlbumCont, AlbumTitle } from "./album.styled";
/**
 *  Create single Album
 *  @param {object} album
 *  @returns {component}
 */
const Album = ({ album }) => {
  // setAlbum value for photos
  const { setAlbum } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <AlbumCont
      onClick={() => {
        navigate("/photos");
        setAlbum(album);
      }}
    >
      <AlbumTitle>
        <FontAwesomeIcon icon={faFolder} /> {album.title}
      </AlbumTitle>
    </AlbumCont>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Album.defaultProps = {
  album: {},
};
export default Album;

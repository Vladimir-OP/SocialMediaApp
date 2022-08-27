import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { AlbumCont, AlbumTitle, AlbumIcon } from "./album.styled";
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
    data-testid="Album"
      onClick={() => {
        navigate("/photos");
        setAlbum(album);
      }}
    >
      <AlbumIcon>
        <FontAwesomeIcon icon={faFolder} />
      </AlbumIcon>

      <AlbumTitle>{album.title}</AlbumTitle>
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

import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  PhotoCont,
  AlbumPhoto,
  PhotoInfoCont,
  BlackField,
} from "./photo.style";
/**
 * Creates single photo component
 * @param {object} photo
 * @returns  {component}
 */
const Photo = ({ photo }) => {
  // keep boolean valu depends on mouse movement
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <PhotoCont
      onMouseEnter={() => {
        setOpenInfo(true);
      }}
      onMouseLeave={() => {
        setOpenInfo(false);
      }}
    >
      <AlbumPhoto src={photo.url}></AlbumPhoto>

      <BlackField openInfo={openInfo}>
        <PhotoInfoCont>{photo.title}</PhotoInfoCont>
      </BlackField>
    </PhotoCont>
  );
};

Photo.propTypes = {
  Photo: PropTypes.shape({
    title: PropTypes.string,
    url:PropTypes.string
  }),
};

Photo.defaultProps = {
  photo: {},
};

export default Photo;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faUser } from "@fortawesome/free-regular-svg-icons";
import { Turn } from "hamburger-react";
import { UserContext } from "../UserContext";
import {
  NavBarCont,
  NavBarItems,
  NavCont,
  NavIcon,
  BarItemUser,
  BarItemAlbum,
} from "./navbar.style";
/**
 * create navbar and its items
 * @returns {component}
 */
const Navbar = () => {
  // keep value about navbar status (opened,closed)
  const [openNavBar, setOpenNavBar] = useState(false);
  // keep user icon color value and on click chage it
  const [userIconColor, setUserIconColor] = useState(true);
  // keep albums icon color value and on click chage it
  const [albumIconColor, setAlbumIconColor] = useState(false);
  // keep value about album status and opens it on click
  const { setOpenAlbum } = useContext(UserContext);
  const navigare = useNavigate();

  return (
    <NavCont>
      <NavIcon
        onClick={() => {
          setOpenNavBar((prev) => !prev);
        }}
      >
        <Turn />
      </NavIcon>
      <NavBarCont openNavBar={openNavBar}>
        <NavBarItems>
          <BarItemUser
            onClick={() => {
              setUserIconColor((prev) => !prev);
              setAlbumIconColor(false);
              setOpenAlbum(false);
              navigare("/user");
            }}
            iconColor={userIconColor}
          >
            <FontAwesomeIcon icon={faUser} />
          </BarItemUser>
          <BarItemAlbum
            onClick={() => {
              setOpenAlbum(true);
              setAlbumIconColor((prev) => !prev);
              setUserIconColor(false);
              navigare("/albums");
            }}
            iconColor={albumIconColor}
          >
            <FontAwesomeIcon icon={faImages} />
          </BarItemAlbum>
        </NavBarItems>
      </NavBarCont>
    </NavCont>
  );
};

export default Navbar;

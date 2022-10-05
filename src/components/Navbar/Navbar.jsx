import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faUser } from "@fortawesome/free-regular-svg-icons";
import { Turn } from "hamburger-react";
import { UserContext } from "../contexts/UserContext";
import {
  NavBarCont,
  NavBarItems,
  NavCont,
  NavIcon,
  BarItemUser,
  BarItemAlbum,
} from "./navbar.style";
/**
 *  Creates navbar and its items
 *  @returns {component}
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
  const navigate = useNavigate();

  return (
    <NavCont>
      <NavIcon
        onClick={() => {
          setOpenNavBar((prev) => !prev);
        }}
      >
        <Turn />
      </NavIcon>
      <NavBarCont openNavBar={openNavBar} data-testid="NavBar">
        <NavBarItems data-testid="Navbar">
          <BarItemUser
            data-testid="BarItemUser"
            onClick={() => {
              setUserIconColor((prev) => !prev);
              setAlbumIconColor(false);
              setOpenAlbum(false);
              navigate("/user");
            }}
            iconColor={userIconColor}
          >
            <FontAwesomeIcon icon={faUser} />
          </BarItemUser>
          <BarItemAlbum
            data-testid="BarItemAlbum"
            onClick={() => {
              setOpenAlbum(true);
              setAlbumIconColor((prev) => !prev);
              setUserIconColor(false);
              navigate("/albums");
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

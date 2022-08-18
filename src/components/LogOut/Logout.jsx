import { useNavigate } from "react-router-dom";
import { LogoutBtn } from "./logout.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

/**
 *  logout user
 * @returns {component} Logout component
 */
const Logout = () => {
  const navigate = useNavigate();

  return (
    // remove user from local storage and navigate to login page
    <LogoutBtn
      onClick={() => {
        localStorage.removeItem("user");
        navigate("/");
      }}
    >
      <FontAwesomeIcon icon={faSignOut} />
    </LogoutBtn>
  );
};

export default Logout;

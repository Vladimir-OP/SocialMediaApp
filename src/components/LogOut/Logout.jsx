import { useNavigate } from "react-router-dom";
import { LogoutBtn } from "./logout.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const navigate = useNavigate();

  return (
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

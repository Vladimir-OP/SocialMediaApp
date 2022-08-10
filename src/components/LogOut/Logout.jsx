import { useNavigate } from "react-router-dom";
import { LogoutBtn } from "./logout.style";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <LogoutBtn
      onClick={() => {
        navigate("/");
      }}
    >
      Logout
    </LogoutBtn>
  );
};

export default Logout;

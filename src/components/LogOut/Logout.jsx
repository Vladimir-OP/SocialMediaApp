import { Link } from "react-router-dom";
import { LogoutBtn } from "./logout.style";

const Logout = () => {
  return <LogoutBtn><Link to={"/"}>Logout</Link></LogoutBtn>;
};

export default Logout;

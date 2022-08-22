import { Routes, Route, useLocation } from "react-router-dom";
import UserContextProvider from "./components/UserContext";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Logout from "./components/LogOut/Logout";
import Photos from "./components/albums/photos/Photos";
import Navbar from "./components/navbar/Navbar";
import Albums from "./components/albums/Albums";

/**
 *  Creates App component configured with globalstyles and main elements of the page
 *  @returns {component} App component including the components of the page
 */
function App() {
  const location = useLocation();

  return (
    <UserContextProvider>
      {location.pathname !== "/" && <Navbar />}
      {location.pathname !== "/" && <Logout />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

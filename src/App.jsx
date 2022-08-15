import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContextProvider from "./components/UserContext";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Logout from "./components/LogOut/Logout";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;

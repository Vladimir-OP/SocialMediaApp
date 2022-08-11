import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Logout from "./components/LogOut/Logout";

function App() {
  const [user, setUser] = useState();
  const [commentsL,setCommentsL] = useState()
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser,commentsL,setCommentsL }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

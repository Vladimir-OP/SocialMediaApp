import Login from "./components/Login/Login";
import User from "./components/User/User";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/user" element={<User user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;

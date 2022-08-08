import styled from "styled-components";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AppWrapper = styled.div`
 width:100%;
 height:100vh;
 background:white
 justify-content:center
`;

function App() {
  return (
    <Router path>
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;

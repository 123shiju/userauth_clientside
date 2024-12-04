import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import UserLists from "./Users/UserLists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateUser from "./UpdateUser/UpdateUser";
import Navbar from "./NavBar/Navbar";
function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserLists />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

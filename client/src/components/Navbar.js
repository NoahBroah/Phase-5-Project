import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";

function Navbar() {
  
  const [currentUser, setCurrentUser] = useContext(UserContext);

  useEffect(() => {
    console.log(currentUser)
  })

  function handleLogout() {
    console.log("Logged Out");
  }
  return (
    <div className="nav">
      <div className="nav-inner">
        <NavLink to="/" exact className="title">
          BlockCV
        </NavLink>
      </div>
      <div className="nav-inner">
        <div>
          {/* {currentUser.first_name} */}
        </div>
        <NavLink to="/signup" exact className="hvr-rotate">
          Signup
        </NavLink>
        <NavLink to="/signup" className="hvr-rotate" onClick={handleLogout}>
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

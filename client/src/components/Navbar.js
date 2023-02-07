import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";

function Navbar() {
  
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    console.log(user)
  })

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
        alert("You have been logged out");
      }
    });
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
        <NavLink to="/login" className="hvr-rotate">
          Login
        </NavLink>
        <NavLink to="/signup" className="hvr-rotate" onClick={handleLogout}>
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [logedIn, setLogedIn] = useState(true);
  const handleloginEvent = () => {
    setLogedIn(!logedIn);
  };
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 ">
              <Link to="#">University Portal</Link>
            </div>
            <div className="col-lg-9 col-md-9">
              <ul>
                {logedIn ? (
                  <li>
                    <Link to="/" onClick={handleloginEvent}>
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="logout" onClick={handleloginEvent}>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

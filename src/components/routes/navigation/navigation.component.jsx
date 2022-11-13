import React from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as Crown } from "../../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Crown />
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            Shop
          </Link>
          <Link to="signin" className="nav-link">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

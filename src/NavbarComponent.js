import React from "react";

import "./style.css";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand trial" href="#">
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Bootstrap
        </a>
      </div>
    </nav>
  );
};

export default NavbarComponent;

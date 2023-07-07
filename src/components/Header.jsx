import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header_head">
      <div className="header_container">
        <div className="header_cloud"></div>
        <div className="header_content">
          <h1>WELCOME TO</h1>
          <h3>WEBSITE</h3>
          <button className="header_btn">Go somewhere</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

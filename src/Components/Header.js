import React from "react";

import Timer from './Timer';

const Header = () => (
  <div id="header">
    <a href="/">
      <img src="https://phoenixhacks.com/img/fireball-phoenix-purple.svg"
        alt="phoenixhacks logo">
      </img>
      <span className="logo-text">
        <span className="capital">P</span>HOENIX
        <span className="capital">H</span>ACKS
        <span className="live-inside">LIVE</span>
      </span>
    </a>
    <span className="live-outside">LIVE</span>
    <Timer/>
  </div>
)

export default Header;
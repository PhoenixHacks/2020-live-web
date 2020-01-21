import React from "react";

import Timer from './Timer';

export default class Header extends React.Component {
  isLive = false;

  headerCallback = (timerData) => {
    this.setState(timerData);
  }

  render() {
    const isLive = this.headerCallback.isLive;

    return (
      <div id="header">
        <a href="/">
          <img src="https://phoenixhacks.com/img/fireball-phoenix-purple.svg" alt="phoenixhacks logo"></img>&nbsp;
          <span className="logo-text">
            <span className="capital">P</span>HOENIX<span className="capital">H</span>ACKS
            <span className="live">LIVE</span>
            {/*isLive ? <span className="live">LIVE</span> : <span className="live text-danger">LIVE</span>*/}
          </span>
        </a>
        <Timer headerCallback={this.headerCallback} />
      </div>
    );
  }
}

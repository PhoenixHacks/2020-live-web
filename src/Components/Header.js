import React from "react";

import Announcements from "./Announcements";
import Timer from './Timer';

export default class Header extends React.Component {
  isLive = false;

  headerCallback = (timerData) => {
    this.setState(timerData);
  }

  render() {
    const { now, timer, isLive } = this.headerCallback;

    return (
      <div className="header row justify-content-center">
        <nav>
          <div>
            <a className="title" href="/">
              <img src="https://phoenixhacks.com/img/fireball-phoenix-purple.svg" alt="phoenixhacks logo" className="logo-image"></img>
              <span className="logo-text">
                <span className="capital">P</span>HOENIX<span className="capital">H</span>ACKS
                {isLive ? <span className="live">LIVE</span> : <span className="live text-danger">LIVE</span>}
              </span>
            </a>
          </div>
          <div>
            <Timer headerCallback={this.headerCallback} />
            {isLive ? <span>hackathon in progress</span> : <span>hackathon not started</span>}
          </div>
        </nav>
      </div>
    );
  }
}

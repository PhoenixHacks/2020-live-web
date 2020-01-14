import React from "react";

import Announcements from "./Announcements";

export default class Header extends React.Component {
  state = { timer: "00:00:00" };
  isLive = false;

  componentDidMount = () => this.countdown();

  countdown = () => {
    /*let countDownDate = new Date("Jan 26, 2020 12:00:00").getTime();*/
    let countDownDate = new Date("Jan 15, 2020 12:00:00").getTime();

    return setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval();
      }

      let f_days = ("0" + days).slice(-2);
      let f_hours = ("0" + hours).slice(-2);
      let f_minutes = ("0" + minutes).slice(-2);
      let f_seconds = ("0" + seconds).slice(-2);

      let timer = f_days + ":" + f_hours + ":" + f_minutes + ":" + f_seconds;
      this.setState({ timer });
      if (days < 1 && timer != "00:00:00:00") {
        this.isLive = true;
      }
    }, 1000);
  };

  render() {
    const { timer } = this.state;
    const { isLive } = this.isLive;
    return (
      <React.Fragment>
        <nav className="row align-items-center justify-content-center">
          <div className="col">
            <a className="title row justify-content-center" href="/">
              <img src="https://phoenixhacks.com/img/fireball-phoenix-purple.svg" alt="phoenixhacks logo" className="logo-image"></img>
              <span className="logo-text">
                <span className="capital">P</span>HOENIX<span className="capital">H</span>ACKS
                <span className="live text-danger">LIVE</span>
              </span>
            </a>
          </div>
          {isLive ? <h1 className="timer col">{timer}</h1> : <h1 className="timer col text-danger">{timer}</h1>}
        </nav>
        
        {/*
        <hr />
        <div className="header-container row">
          <div className="header-btn-container">
            <a href="https://phoenixhacks.com/slack" target="_blank" rel="noopener noreferrer">
              <button className="btn header-btn">Slack</button>
            </a>
            <a href="https://phoenixhacks2020.devpost.com" target="_blank" rel="noopener noreferrer">
              <button className="btn header-btn">Devpost</button>
            </a>
          </div>

          <div className="header-info">
            <h5>WIFI: <strong>????</strong></h5>
            <h5>WIFI Password: <strong>????</strong></h5>
            <a
              href="https://phoenixhacks.com/photos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 style={{ color: "#FF363F" }}>
                <b>Media</b>
              </h5>
            </a>
          </div>
        </div>
        <div className="header-container">
          <Announcements />
        </div>*/}

      </React.Fragment>
    );
  }
}

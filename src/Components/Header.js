import React from "react";

import Announcements from "./Announcements";

export default class Header extends React.Component {
  state = { timer: "00:00:00" };
  isLive = false;

  componentDidMount = () => this.countdown();

  countdown = () => {
    let countDownDate = new Date("Jan 26, 2020 12:00:00").getTime();
    //let countDownDate = new Date("Jan 16, 2020 12:00:00").getTime();

    return setInterval(() => {
      let now = new Date().getTime();
      let isLive = false;

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
      console.log(days)
      if (days === 0 && timer !== "00:00:00:00") {
        isLive = true;
      }
      this.setState({now, timer, isLive});
    }, 1000);
  };

  render() {
    const { now, timer, isLive } = this.state;

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
            {isLive ? <h1 className="timer text-success">{timer}</h1> : <h1 className="timer text-danger">{timer}</h1>}
          </div>
        </nav>
      </div>
    );
  }
}

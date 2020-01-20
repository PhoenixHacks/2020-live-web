import React from "react";

export default class Timer extends React.Component {
  state = { timer: "00:00:00" };

  componentDidMount = () => this.countdown();

  countdown = () => {
    let countDownDate = new Date("Jan 25, 2020 12:00:00").getTime();

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
      
      if (days === 0 && timer !== "00:00:00:00") {
        isLive = true;
      }
      this.setState({now, timer, isLive});
      this.props.headerCallback(this.state)
    }, 1000);
  };

  render() {
    const { now, timer, isLive } = this.state;

    return (
      <div>
        {isLive ? <h1 className="timer text-success">{timer}</h1> 
                : <h1 className="timer text-danger">{timer}</h1>}
      </div>
    )
  }
}
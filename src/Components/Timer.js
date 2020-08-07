import React from "react";
import config from '../services/config';

const TimeUnits = () => (
  <div id="timeUnits">
    <div>
      <svg>
        <circle></circle>
      </svg><br/>d
    </div>
    <div>
      <svg>
        <circle></circle>
      </svg><br/>h
    </div>
    <div>
      <svg>
        <circle></circle>
      </svg><br/>m
    </div>
    <div>
      <svg>
        <circle></circle>
      </svg><br/>s
    </div>
  </div>
)

const Clock = ({ timer }) => (
  <h1>
    <span>{timer.f_days}</span>
    <span>:</span>
    <span>{timer.f_hours}</span>
    <span>:</span>
    <span>{timer.f_minutes}</span>
    <span>:</span>
    <span>{timer.f_seconds}</span>
  </h1>
)

export default class Timer extends React.Component {
  state = { 
    timer: { f_days: "00", f_hours: "00",
      f_minutes: "00", f_seconds: "00"} 
  };

  componentDidMount = () => this.countdown();

  countdown = () => {
    let endDate = new Date(config.END_DATE).getTime();

    return setInterval(() => {
      let now = new Date().getTime();
      let isLive = false;
      let isOver = false;

      let distance = endDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval();
        isOver = true;
      }

      let f_days = ("0" + days).slice(-2)
      let f_hours = ("0" + hours).slice(-2);
      let f_minutes = ("0" + minutes).slice(-2);
      let f_seconds = ("0" + seconds).slice(-2);

      //let startTimer = ("0" + (days - 1)).slice(-2) + ":" + f_hours + ":" + f_minutes + ":" + f_seconds;
      //let endTimer = f_days + ":" + f_hours + ":" + f_minutes + ":" + f_seconds;
      
      if (days === 0) {
        isLive = true;
      }

      if (!isOver && !isLive) {
        f_days = ("0" + (days - 1)).slice(-2)
      } 
      
      if (!isOver) {
        let timer = { f_days, f_hours, f_minutes, f_seconds }
        this.setState({ isLive, timer });
      } else {
        this.setState({ isLive });
      }
      
    }, 1000);
  };

  render() {
    //TODO: Add the functionality to detect if the hackathon is over and indicate that the site is in 'offline' mode.
    const { isLive, timer } = this.state;

    return (
      <div id="timer">
        {isLive ? <span>ends in</span> 
         : <span>starts in</span> }
        <Clock timer={timer}/>
        <hr/>
        <TimeUnits />
      </div>
    )
  }
}
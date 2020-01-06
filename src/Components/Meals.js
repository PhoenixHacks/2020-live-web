import React from "react";

export default class Meals extends React.Component {
  render() {
    return (
      <div className="meals">
        <h2>
          <b>Meals</b>
        </h2>
        <section className="schedule">
          <div className="days">
            <div className="day generalReveal">
              <h3>
                <b>Friday</b>
              </h3>
              <ul className="times">
                <li>
                  <span className="time global-accent-color">5:00pm</span>
                  Dinner
                </li>
                <li>
                  <span className="time global-accent-color">12:00am</span>{" "}
                  Midnight Snack
                </li>
              </ul>
            </div>
            <div className="day generalReveal">
              <h3>
                <b>Saturday</b>
              </h3>
              <ul className="times">
                <li>
                  <span className="time global-accent-color">8:00am</span>{" "}
                  Breakfast
                </li>
                <li>
                  <span className="time global-accent-color">1:00pm</span> Lunch
                </li>
                <li>
                  <span className="time global-accent-color">7:00pm</span>{" "}
                  Dinner
                </li>
              </ul>
            </div>
            <div className="day generalReveal">
              <h3>
                <b>Sunday</b>
              </h3>
              <ul className="times">
                <li>
                  <span className="time global-accent-color">12:00am</span>{" "}
                  Midnight Snack
                </li>
                <li>
                  <span className="time global-accent-color">7:00am</span>{" "}
                  Devpost Submissions Due
                </li>
                <li>
                  <span className="time global-accent-color">8:15am</span>{" "}
                  Breakfast
                </li>
                <li>
                  <span className="time global-accent-color">9:00am</span>{" "}
                  Hacking Ends
                </li>
                <li>
                  <span className="time global-accent-color">10:00am</span> Expo
                  Begins
                </li>
                <li>
                  <span className="time global-accent-color">12:00pm</span>{" "}
                  Closing Ceremony Begins
                </li>
                <li>
                  <span className="time global-accent-color">1:00pm</span>{" "}
                  PhoenixHacks Ends
                </li>
              </ul>
            </div>
          </div>
        </section>
        ;
      </div>
    );
  }
}

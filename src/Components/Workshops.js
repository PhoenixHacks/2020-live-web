import React from "react";

const worskhop = [
  {
    title: "Intro to the 8base platform",
    time: "10:30pm - 12:00am",
    description:
      "Merit Lab 144. Use 8base and skip the complex data modeling to get ahead of the competition!"
  },
  {
    title: "Git good at team collaboration with Github",
    time: "12:30am - 1:15am",
    description:
      "PG6 105. Crash course in using Git & Github as a team collaboration tool."
  },
  {
    title: "Intro to CSS + HTML",
    time: "1:30am - 2:15am",
    description: "PG6 105. Learn the foundation to make a website."
  },
  {
    title: "Intro to GraphQL",
    time: "9:00am - 10:00am",
    description: "Merit Lab 144. Learn the basics of GraphQL, taught by 8base."
  },
  {
    title: "Javascript: The sweet parts",
    time: "10:00am - 11:00am",
    description: "PG6 105. Learn the basics of Javascript.."
  },
  {
    title: "Getting started with react and styled components",
    time: "11:30am - 12:30pm",
    description: "Merit Lab 144. Learn the basics of React, taught by GE."
  },
  {
    title: "What now?",
    time: "2:00pm - 3:00pm",
    description: "PG6 105. A guide to exploring the world in tech."
  },
  {
    title: "Googler Spotlights: Data Science and Software Engineering",
    time: "4:00pm - 5:00pm",
    description:
      "Merit Lab 144. Ask Google engineers questions and get information on a googlers life."
  },
  {
    title: "Demystifying AI/ML",
    time: "5:30pm - 6:30pm",
    description: "PG6 105."
  }
];
export default class Workshops extends React.Component {
  render() {
    return (
      <div className="workshops">
        <h2>
          <b>Workshops</b>
        </h2>
        <ul className="schedule-list">
          {worskhop.map((item, index) => (
            <li key={index}>
              <span className="schedule-header">
                <span style={{ fontSize: "25px" }}>
                  <b>{item.title}</b>
                </span>
                <span style={{ color: "#8f40bf" }}>
                  <b>{item.time}</b>
                </span>
              </span>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

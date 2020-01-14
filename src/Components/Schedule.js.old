import React, { Component } from "react";

const schedule = [
  {
    activity: "Check-In",
    time: "5:00pm - 7:00pm",
    description: "PhoenixHacks Check-In will be in PG6 Lobby."
  },
  {
    activity: "Dinner",
    time: "5:00pm - 7:00pm",
    description: "Pollo Tropical. Must be checked in to receive food."
  },
  {
    activity: "Sponsor Mingle",
    time: "5:00pm - 7:00pm",
    description: "Meet our sponsors before opening in PG6 Lobby."
  },
  {
    activity: "Opening Ceremony",
    time: "7:00pm - 7:30pm",
    description: "Student Academic Success Center (SASC) 160."
  },
  {
    activity: "Career Experience",
    time: "7:30pm - 9:00pm",
    description: "Graham Center (GC). Meet the sponsors and receive cool swag!"
  },
  {
    activity: "Hacking Begins!",
    time: "9:00pm",
    description: "Hack away at PG6."
  },
  {
    activity: "Team building",
    time: "9:00pm - 9:30pm",
    description: "PG6 Lobby. Join a team for the weekend."
  },
  {
    activity: "Lighting Talks",
    time: "9:30pm - 10:30pm",
    description: "PG6 105. Short sweet talks given your workshop instructors."
  },
  {
    activity: "Intro to 8base platform",
    time: "10:30pm - 12:00am",
    description:
      "Merit Lab 144. Learn about the 8base platform and their challenge for a chance at an awesome prize!"
  },
  {
    activity: "Midnight snack ",
    time: "12:00am - 12:30am",
    description: "PG6 Lobby. Get a tasty treat."
  },
  {
    activity: "Git good at team collaboration with Github",
    time: "12:30am - 1:15am",
    description:
      "PG6 105. Crash course in using Git & Github as a team collaboration tool."
  },
  {
    activity: "Intro to CSS + HTML",
    time: "1:30am - 2:15am",
    description: "PG6 105. Learn the foundation to make a website."
  },
  {
    activity: "Breakfast",
    time: "8:00am - 9:00am",
    description: "PG6. Panera sandwiches."
  },
  {
    activity: "Intro to GraphQL",
    time: "9:15am - 10:15am",
    description: "Merit Lab 144. Learn the basics of GraphQL, taught by 8base."
  },
  {
    activity: "Javascript: The sweet parts",
    time: "10:15am - 11:15am",
    description: "PG6 144. Learn the basics of Javascript."
  },
  {
    activity: "Getting started with react and styled components",
    time: "11:30am - 12:30pm",
    description: "Merit Lab 144. Learn the basics of React, taught by GE."
  },
  {
    activity: "Lunch",
    time: "2:00pm - 3:00pm",
    description: "PG6. Publix subs."
  },
  {
    activity: "What now?",
    time: "3:00pm - 4:00pm",
    description: "PG6 144. A guide to exploring the world in tech."
  },
  // {
  //   activity: "Salsa dancing",
  //   time: "3:00pm - 4:00pm",
  //   description:
  //     "PG6 Lobby. Learn more than just a 2 step in this fun dancing activity."
  // },
  {
    activity: "Googler Spotlights: Data Science and Software Engineering",
    time: "4:00pm - 5:00pm",
    description:
      "Merit Lab 144. Ask Google engineers questions and get information on a googlers life."
  },
  {
    activity: "Demystifying AI/ML",
    time: "5:30pm - 6:30pm",
    description: "PG6 144."
  },
  {
    activity: "Dinner",
    time: "7:00pm - 8:30pm",
    description: "PG6."
  },
  {
    activity: "Ladies Storm Hackathon",
    time: "8:00pm - 9:00pm",
    description: "PG6 Lobby. An activity by Women in Computer Science (WICS)"
  },
  {
    activity: "Cupstacking",
    time: "9:00pm - 10:00pm",
    description:
      "PG6 Lobby. Can you build the highest cup tower? An activity hosted by MLH."
  },
  {
    activity: "Midnight Snack",
    time: "12:00am - 12:45am",
    description: "PG6 Lobby."
  },
  {
    activity: "Werewolf",
    time: "1:00am - 1:30am",
    description: "PG6 105."
  },
  {
    activity: "Smash Bro's Gaming Tournament",
    time: "1:30am",
    description: "PG6 105."
  },
  {
    activity: "Devpost submissions due!",
    time: "8:00am",
    description: "Submit your hack to be elegible to win some sweet prizes!"
  },
  {
    activity: "Breakfast!",
    time: "8:15am - 9:00am",
    description: "PG6 Halfmoon."
  },
  {
    activity: "Hacking ends!",
    time: "9:00am",
    description:
      "You did it! Get ready for to demo your hack to plenty of judges and hackers!"
  },
  {
    activity: "Judging Expo",
    time: "10:00am - 12:00pm",
    description:
      "PG6 116 / PG6 112. Demo your hack to our sweet panel of judges and other hackers!"
  },
  {
    activity: "Closing ceremony",
    time: "12:30am - 1:30pm",
    description:
      "PG6 116 / PG6 112. Demo your hack to our sweet panel of judges!"
  },
  {
    activity: "PhoenixHacks ends",
    time: "2:00pm",
    description: "You made it! Now you get to share your skills with the world!"
  }
];

export default class Schedule extends React.Component {
  render() {
    return (
      <div className="schedule">
        <h2>
          <b>Schedule</b>
        </h2>
        <ul className="schedule-list">
          {schedule.map((item, index) => (
            <li key={index}>
              <span className="schedule-header">
                <span style={{ fontSize: "25px" }}>
                  <b>{item.activity}</b>
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

const schedule = [
  {
    "event": "Check-In",
    "datetime": {
      "start": "09:00am",
      "end": "11:00am",
      "day": "25"
    },
    "tags": ["logistics"],
    "location": "IST - South Lobby",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Opening Ceremony",
    "datetime": {
      "start": "11:00am",
      "end": "12:00pm",
      "day": "25"
    },
    "tags": ["logistics"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Hacking Begins",
    "datetime": {
      "start": "12:00pm",
      "end": "12:00pm",
      "day": "25"
    },
    "tags": ["logistics"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Ice Breaker",
    "datetime": {
      "start": "12:00pm",
      "end": "01:00pm",
      "day": "25"
    },
    "tags": ["logistics"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Scavenger Hunt",
    "datetime": {
      "start": "12:00pm",
      "end": "01:00pm",
      "day": "25"
    },
    "tags": ["activity"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Lunch-Chick-Fil-A",
    "datetime": {
      "start": "01:00pm",
      "end": "02:00pm",
      "day": "25"
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Embedded Systems (Section 1)",
    "datetime": {
      "start": "02:00pm",
      "end": "02:45pm",
      "day": "25"
    },
    "tags": ["workshop"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Introduction to Collaboration using Git and GitHub",
    "datetime": {
      "start": "03:00pm",
      "end": "03:45pm",
      "day": "25"
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Embedded Systems (Section 2)",
    "datetime": {
      "start": "02:00pm",
      "end": "02:45pm",
      "day": "25"
    },
    "tags": ["workshop"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Arduino Workshop",
    "datetime": {
      "start": "05:00pm",
      "end": "05:45pm",
      "day": "25"
    },
    "tags": ["workshop"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Gaming with Azure",
    "datetime": {
      "start": "06:00pm",
      "end": "06:30pm",
      "day": "25"
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Dinner-Dominos",
    "datetime": {
      "start": "07:00pm",
      "end": "08:00pm",
      "day": "25"
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Interfacing APIs with Python",
    "datetime": {
      "start": "08:00pm",
      "end": "09:00pm",
      "day": "25"
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "CTF Challenge",
    "datetime": {
      "start": "09:00pm",
      "end": "10:00pm",
      "day": "25"
    },
    "tags": ["activity"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Cup Stacking",
    "datetime": {
      "start": "10:00pm",
      "end": "11:00pm",
      "day": "25"
    },
    "tags": ["activity"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Werewolf",
    "datetime": {
      "start": "11:00pm",
      "end": "12:00am",
      "day": "25"
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Midnight Snack",
    "datetime": {
      "start": "12:00am",
      "end": "01:00am",
      "day": "26"
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Smash Tournament",
    "datetime": {
      "start": "01:00am",
      "end": "02:30am",
      "day": "26"
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Team Jeopardy",
    "datetime": {
      "start": "02:00am",
      "end": "03:00am",
      "day": "26"
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Breakfast-Dunkin Donuts",
    "datetime": {
      "start": "08:00am",
      "end": "09:00am",
      "day": "26"
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "DevPost Submissions Due",
    "datetime": {
      "start": "11:00am",
      "end": "12:00pm",
      "day": "26"
    },
    "tags": ["logistics", "warning"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Hacking Ends",
    "datetime": {
      "start": "12:00pm",
      "end": "12:00pm",
      "day": "26"
    },
    "tags": ["logistics", "success"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Lunch - Subway",
    "datetime": {
      "start": "12:00pm",
      "end": "01:00pm",
      "day": "26"
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Demoing & Judging",
    "datetime": {
      "start": "01:00pm",
      "end": "03:30pm",
      "day": "26"
    },
    "tags": ["logistics"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Deliberations",
    "datetime": {
      "start": "03:30pm",
      "end": "04:00pm",
      "day": "26"
    },
    "tags": ["logistics"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "event": "Closing Ceremony",
    "datetime": {
      "start": "04:00pm",
      "end": "05:00pm",
      "day": "26"
    },
    "tags": ["logistics"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

export default schedule;
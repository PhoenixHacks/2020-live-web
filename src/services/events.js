const events = [
  {
    "name": "Check-In",
    "date": "2020-01-25",
    "time": {
      "start": "09:00:00",
      "end": "11:00:00"
    },
    "tags": ["logistics"],
    "location": "IST - South Lobby",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Opening Ceremony",
    "date": "2020-01-25",
    "time": {
      "start": "11:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Hacking Begins",
    "date": "2020-01-25",
    "time": {
      "start": "12:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics", "greenlight"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Ice Breaker",
    "date": "2020-01-25",
    "time": {
      "start": "12:00:00",
      "end": "13:00:00",
    },
    "tags": ["logistics"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Scavenger Hunt",
    "date": "2020-01-25",
    "time": {
      "start": "12:00:00",
      "end": "13:00:00",
    },
    "tags": ["activity"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Lunch-Chick-Fil-A",
    "date": "2020-01-25",
    "time": {
      "start": "13:00:00",
      "end": "14:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Embedded Systems (Section 1)",
    "date": "2020-01-25",
    "time": {
      "start": "14:00:00",
      "end": "14:45:00",
    },
    "tags": ["workshop"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Introduction to Collaboration using Git and GitHub",
    "date": "2020-01-25",
    "time": {
      "start": "15:00:00",
      "end": "15:45:00",
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Embedded Systems (Section 2)",
    "date": "2020-01-25",
    "time": {
      "start": "16:00:00",
      "end": "16:45:00",
    },
    "tags": ["workshop"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Arduino Workshop",
    "date": "2020-01-25",
    "time": {
      "start": "17:00:00",
      "end": "17:45:00",
    },
    "tags": ["workshop"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Gaming with Azure",
    "date": "2020-01-25",
    "time": {
      "start": "18:00:00",
      "end": "18:30:00",
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Dinner-Dominos",
    "date": "2020-01-25",
    "time": {
      "start": "19:00:00",
      "end": "20:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Interfacing APIs with Python",
    "date": "2020-01-25",
    "time": {
      "start": "20:00:00",
      "end": "21:00:00",
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "CTF Challenge",
    "date": "2020-01-25",
    "time": {
      "start": "21:00:00",
      "end": "22:00:00",
    },
    "tags": ["activity"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Cup Stacking",
    "date": "2020-01-25",
    "time": {
      "start": "22:00:00",
      "end": "23:00:00",
    },
    "tags": ["activity"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Werewolf",
    "date": "2020-01-25",
    "time": {
      "start": "23:00:00",
      "end": "00:00:00",
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Midnight Snack",
    "date": "2020-01-26",
    "time": {
      "start": "00:00:00",
      "end": "01:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Smash Tournament",
    "date": "2020-01-26",
    "time": {
      "start": "01:00:00",
      "end": "02:30:00",
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Team Jeopardy",
    "date": "2020-01-26",
    "time": {
      "start": "02:00:00",
      "end": "03:00:00",
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Breakfast-Dunkin Donuts",
    "date": "2020-01-26",
    "time": {
      "start": "08:00:00",
      "end": "09:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "DevPost Submissions Due",
    "date": "2020-01-26",
    "time": {
      "start": "11:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics", "yellowlight"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Hacking Ends",
    "date": "2020-01-26",
    "time": {
      "start": "12:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics", "redlight"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Lunch - Subway",
    "date": "2020-01-26",
    "time": {
      "start": "12:00:00",
      "end": "13:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Demoing & Judging",
    "date": "2020-01-26",
    "time": {
      "start": "13:00:00",
      "end": "15:30:00",
    },
    "tags": ["logistics"],
    "location": "Commons",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Deliberations",
    "date": "2020-01-26",
    "time": {
      "start": "15:30:00",
      "end": "16:00:00",
    },
    "tags": ["logistics"],
    "location": "",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Closing Ceremony",
    "date": "2020-01-26",
    "time": {
      "start": "16:00:00",
      "end": "17:00:00",
    },
    "tags": ["logistics"],
    "location": "Aula Magna",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

export default events;
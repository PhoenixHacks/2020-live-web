// events.js
/* NOTE: Be careful of midnight. 
00:00:00 is 12:00AM of the current day
24:00:00 is 12:00AM of the next day
*/

const events = [
  {
    "name": "Check-In",
    "date": "2020-08-06",
    "time": {
      "start": "09:00:00",
      "end": "11:00:00"
    },
    "tags": ["logistics"],
    "location": "IST - South Lobby",
    "description": ""
  },
  {
    "name": "Opening Ceremony",
    "date": "2020-08-06",
    "time": {
      "start": "11:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics"],
    "location": "Aula Magna",
    "description": "Details about the PhoenixHacks, workshops/activities to expect, and other useful info."
  },
  {
    "name": "Hacking Begins",
    "date": "2020-08-06",
    "time": {
      "start": "12:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics", "greenlight"],
    "location": "",
    "description": "Hacking starts now!"
  },
  {
    "name": "Ice Breaker",
    "date": "2020-08-06",
    "time": {
      "start": "12:00:00",
      "end": "13:00:00",
    },
    "tags": ["logistics"],
    "location": "Commons",
    "description": "Meet new people and find a team."
  },
  {
    "name": "Scavenger Hunt",
    "date": "2020-08-06",
    "time": {
      "start": "12:00:00",
      "end": "13:00:00",
    },
    "tags": ["activity"],
    "location": "Commons",
    "description": "Event-long scavenger hunt info meeting. First place wins a prize!"
  },
  {
    "name": "Lunch - Chick-Fil-A",
    "date": "2020-08-06",
    "time": {
      "start": "13:00:00",
      "end": "14:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": ""
  },
  {
    "name": "Embedded Systems (Section 1)",
    "date": "2020-08-06",
    "time": {
      "start": "14:00:00",
      "end": "14:45:00",
    },
    "tags": ["workshop"],
    "location": "IST-1012",
    "description": "Learn to control I/O of Arduino, FPGA, and Raspberry Pi."
  },
  {
    "name": "Introduction to Collaboration using Git and GitHub",
    "date": "2020-08-06",
    "time": {
      "start": "15:00:00",
      "end": "15:45:00",
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "This workshop will walk you through a collaborative workflow for using Git/Github and familiarize you with forking, creating branches, making changes/commits/pull requests, and familiarize you with merge conflicts."
  },
  {
    "name": "Embedded Systems (Section 2)",
    "date": "2020-08-06",
    "time": {
      "start": "16:00:00",
      "end": "16:45:00",
    },
    "tags": ["workshop"],
    "location": "IST-1012",
    "description": "Learn to control I/O of Arduino, FPGA, and Raspberry Pi."
  },
  {
    "name": "Arduino Workshop",
    "date": "2020-08-06",
    "time": {
      "start": "17:00:00",
      "end": "17:45:00",
    },
    "tags": ["workshop"],
    "location": "IST-1012",
    "description": "Teaching students about the basics of Arduino coding and setup."
  },
  {
    "name": "Gaming with Azure",
    "date": "2020-08-06",
    "time": {
      "start": "18:00:00",
      "end": "18:30:00",
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Using Azure PlayFab and Twine to create a quick story based game like Azure Mystery Mansion."
  },
  {
    "name": "Shuffle Class",
    "date": "2020-08-06",
    "time": {
      "start": "18:15:00",
      "end": "19:00:00",
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Take a break from the hacking and learn the shuffle dance."
  },
  {
    "name": "Dinner - Dominos",
    "date": "2020-08-06",
    "time": {
      "start": "19:00:00",
      "end": "20:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": ""
  },
  {
    "name": "Interfacing APIs with Python",
    "date": "2020-08-06",
    "time": {
      "start": "20:00:00",
      "end": "21:00:00",
    },
    "tags": ["workshop"],
    "location": "Aula Magna",
    "description": "Attendees will learn how to interface Python with IFTTT, Freeboard, and Dweet.io. These are all APIs capable of connecting many online devices and services together."
  },
  {
    "name": "CTF Challenge",
    "date": "2020-08-06",
    "time": {
      "start": "21:00:00",
      "end": "22:00:00",
    },
    "tags": ["activity"],
    "location": "Aula Magna",
    "description": "CTF challenge to think critically. Most flags win."
  },
  {
    "name": "Cup Stacking",
    "date": "2020-08-06",
    "time": {
      "start": "22:00:00",
      "end": "23:00:00",
    },
    "tags": ["activity"],
    "location": "Commons",
    "description": "Play the traditional hackathon cup stacking game for a small prize!"
  },
  {
    "name": "Werewolf",
    "date": "2020-08-06",
    "time": {
      "start": "23:00:00",
      "end": "24:00:00",
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "AKA Mafia.  Come enjoy a game of daredevilry and deceit! Winner gets a small prize."
  },
  {
    "name": "Midnight Snack",
    "date": "2020-08-07",
    "time": {
      "start": "00:00:00",
      "end": "01:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": ""
  },
  {
    "name": "Smash Tournament",
    "date": "2020-08-07",
    "time": {
      "start": "01:00:00",
      "end": "02:30:00",
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Play some smash hosted by Smash Club."
  },
  {
    "name": "Team Jeopardy",
    "date": "2020-08-07",
    "time": {
      "start": "02:00:00",
      "end": "03:00:00",
    },
    "tags": ["activity"],
    "location": "IST-1012",
    "description": "Play a tech-themed Team Jeopardy for a chance to win a small prize."
  },
  {
    "name": "Breakfast - Dunkin Donuts",
    "date": "2020-08-07",
    "time": {
      "start": "08:00:00",
      "end": "09:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": ""
  },
  {
    "name": "DevPost Submissions Due",
    "date": "2020-08-07",
    "time": {
      "start": "11:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics", "yellowlight"],
    "location": "",
    "description": "Submit your project now if you want to be judged!"
  },
  {
    "name": "Hacking Ends",
    "date": "2020-08-07",
    "time": {
      "start": "12:00:00",
      "end": "12:00:00",
    },
    "tags": ["logistics", "redlight"],
    "location": "",
    "description": ""
  },
  {
    "name": "Lunch - Subway",
    "date": "2020-08-07",
    "time": {
      "start": "12:00:00",
      "end": "13:00:00",
    },
    "tags": ["meal"],
    "location": "IST-1014",
    "description": ""
  },
  {
    "name": "Demoing & Judging",
    "date": "2020-08-07",
    "time": {
      "start": "13:00:00",
      "end": "15:30:00",
    },
    "tags": ["logistics"],
    "location": "Commons",
    "description": ""
  },
  {
    "name": "Deliberations",
    "date": "2020-08-07",
    "time": {
      "start": "15:30:00",
      "end": "16:00:00",
    },
    "tags": ["logistics"],
    "location": "",
    "description": ""
  },
  {
    "name": "Closing Ceremony",
    "date": "2020-08-07",
    "time": {
      "start": "16:00:00",
      "end": "17:00:00",
    },
    "tags": ["logistics"],
    "location": "Aula Magna",
    "description": ""
  }
]

export default events;
import React from "react";

import Maps from "./Components/Maps";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Media from "./Components/Media";
import Announcements from "./Components/Announcements";
import Radio from "./Components/Radio";

import DiscordBot from "./Components/DiscordBot";
//import DiscordClient from "./Components/Discord";
import Discord from 'discord.js';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
    
        <div className="content">
          <Media />
          <Schedule />
          <Maps />
        </div>
      </div>
    );
  }
}

export default App;

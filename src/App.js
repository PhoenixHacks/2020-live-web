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
      <React.Fragment>
        <div className="container">
          <div className="header row justify-content-center">
            <Header />
          </div>
      
          <div className="content row align-self-center">

            <div className="section media row">
              <Media />
            </div>

            <div className="section schedule-tabs">
              <Schedule />
            </div>

            <div className="section">
              <Maps />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

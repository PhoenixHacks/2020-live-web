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
          <div className="perspective-1"></div>
      
          <div className="content row align-self-center">
            <div className="col align-self-center">
              <div className="content-section media row justify-content-center">
                <Media />
              </div>

              <div className="content-section schedule-tabs row">
                <Schedule />
              </div>

              <div className="content-section row">
                <Maps />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React from "react";

import Maps from "./Components/Maps";
import Meals from "./Components/Meals";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Challenges from "./Components/Challenges";
import Announcements from "./Components/Announcements";
import Workshops from "./Components/Workshops";
import Radio from "./Components/Radio";

import { ResBlobTop, ResBlobBottom } from "./Components/Shared/Blobs";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header row justify-content-center">
            <Header />
          </div>
      
          <div className="content row align-self-center">

            <div className="section links">

            </div>

            <div className="section schedule-tabs">
              <Schedule />
            </div>
            <hr />
            <Maps />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

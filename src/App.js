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
        {/*<ResBlobTop
          style={{ position: "fixed", zIndex: "-1" }}
          topColor="#47205f"
          bottomColor="#8f40bf"
        />
        <ResBlobTop
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: "-1",
            trasnform: "rotate(90degs)",
            transform: "scale(-1, -1)"
          }}
          topColor="#47205f"
          bottomColor="#8f40bf"
        />*/}
        <div className="container">
          <div className="header">
            <Header />
            <div className="header-info">
              <h5>
                WIFI: <strong>????</strong>
              </h5>
              <h5>
                WIFI Password: <strong>????</strong>
              </h5>
              <a
                href="https://phoenixhacks.com/photos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 style={{ color: "#FF363F" }}>
                  <b>Media</b>
                </h5>
              </a>
            </div>
          </div>

          <div className="schedule-announcements">
            <Schedule />
            <Announcements />
          </div>
          <hr />
          <Meals />
          <hr />
          <Challenges />
          <hr />
          <Workshops />
          <hr />
          <Maps />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

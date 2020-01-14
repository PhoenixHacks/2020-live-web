import React from "react";

import Maps from "./Components/Maps";
import Meals from "./Components/Meals";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Announcements from "./Components/Announcements";
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

            <div className="section media row">
              <div className="media-btn-container col">
                <a href="https://phoenixhacks.com/discord" target="_blank" rel="noopener noreferrer">
                  <button className="btn media-btn">Discord</button>
                </a>
                <a href="https://phoenixhacks2020.devpost.com" target="_blank" rel="noopener noreferrer">
                  <button className="btn media-btn">Devpost</button>
                </a>
              </div>

              <div className="media-info col">
                <h5>WIFI: <strong>????</strong></h5>
                <h5>WIFI Password: <strong>????</strong></h5>
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

              <div className="col">
                <Radio />
              </div>
              {/*
              <div className="links-container col">
                <Announcements />
              </div>*/}
            </div>

            <div className="section schedule-tabs">
              <Schedule />
            </div>
            <div className="section announcements">

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

import React, { Component } from "react";
import Announcements from "./Announcements";

export default class Media extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="media-info col-md-auto">
          <div className="media-btn-container row">
            <a href="https://phoenixhacks.com/discord" target="_blank" rel="noopener noreferrer">
              <button className="btn media-btn">Discord</button>
            </a>
            <a href="https://phoenixhacks2020.devpost.com" target="_blank" rel="noopener noreferrer">
              <button className="btn media-btn">Devpost</button>
            </a>
            <a href="https://phoenixhacks.com/media" target="_blank" rel="noopener noreferrer">
              <button className="btn media-btn">Media</button>
            </a>
          </div>

          <div className="wifi row">
            <h5>WIFI: <strong>????</strong></h5>
            <h5>WIFI Password: <strong>????</strong></h5>
            <a
              href="https://phoenixhacks.com/photos"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
        
        <div className="announcements col">
          <Announcements />
        </div>
      </React.Fragment>
    );
  }
}

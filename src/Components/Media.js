import React, { Component } from "react";
import Announcements from "./Announcements";
import { FaWifi, FaDiscord, FaUpload, FaImages } from 'react-icons/fa';

export default class Media extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="media-info col-sm">
          <div className="media-links card row">
            <a href="https://phoenixhacks.com/discord" className="link" target="_blank" rel="noopener noreferrer">
              <span><FaDiscord size={23}/> Discord</span></a>
            <a href="https://phoenixhacks2020.devpost.com" className="link" target="_blank" rel="noopener noreferrer">
              <span><FaUpload size={23}/> DevPost</span></a>
            <a href="https://phoenixhacks.com/media" className="link" target="_blank" rel="noopener noreferrer">
              <span><FaImages size={23}/> Media</span></a>
          </div>
          <div className="wifi card row">
            <h3 style={{fontWeight: "bold", margin: "0 0 auto 0"}}><FaWifi size={38}/>WiFi</h3>
            <h5><strong>SSID: </strong> ????</h5>
            <h5><strong>Pass:</strong> ????</h5>
          </div>
        </div>
        
        <div className="announcements card col">
          <Announcements />
        </div>
      </React.Fragment>
    );
  }
}

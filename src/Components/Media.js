import React, { Component } from "react";
import Radio from "./Radio";
import Announcements from "./Announcements";
import { FaWifi, FaDiscord, FaUpload, FaImages } from 'react-icons/fa';

export default class Media extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="media-info col-6 align-self-center">
          <div className="row align-items-start">
            <div className="media-links card card-body col-5 align-self-start d-inline-block">
              <a href="https://phoenixhacks.com/discord" className="link" target="_blank" rel="noopener noreferrer">
                <span><FaDiscord size={23}/> Discord</span></a><br/>
              <a href="https://phoenixhacks2020.devpost.com" className="link" target="_blank" rel="noopener noreferrer">
                <span><FaUpload size={23}/> DevPost</span></a><br/>
              <a href="https://phoenixhacks.com/media" className="link" target="_blank" rel="noopener noreferrer">
                <span><FaImages size={23}/> Media</span></a>
            </div>
            <div className="wifi card card-body col-6 offset-1 align-items-start">
              <h3 className="wifi-title"><FaWifi size={38}/> WiFi</h3>
              <h5><strong>SSID: </strong> ????</h5>
              <h5><strong>Pass:</strong> ????</h5>
            </div>
          </div>
          <div className="card card-body align-self-start d-inline-block">
            <Radio />
          </div>
        </div>
        
        <div className="announcements card card-body col-5 offset-1">
          <Announcements />
        </div>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import Radio from "./Radio";
import Announcements from "./Announcements";
import { FaWifi, FaDiscord, FaUpload, FaImages } from 'react-icons/fa';

export default class Media extends React.Component {
  render() {
    return (
      <div className="media">
        <div className="media-info col-6">

          <div className="row">
            <div className="media-links col-5">
              <div className="card">
                <a href="https://phoenixhacks.com/discord" className="link" target="_blank" rel="noopener noreferrer">
                  <span><FaDiscord size={23}/> Discord</span></a><br/>
                <a href="https://phoenixhacks2020.devpost.com" className="link" target="_blank" rel="noopener noreferrer">
                  {/*<span><FaUpload size={23}/> DevPost</span></a><br/>*/}
                  <span><img style={{height: "23px", marginRight: "-3px"}} src={require("../images/devpost-icon3.png")}/> DevPost</span></a><br/>
                <a href="https://phoenixhacks.com/media" className="link" target="_blank" rel="noopener noreferrer">
                  <span><FaImages size={23}/> Media</span></a>
              </div>
            </div>

            <div className="wifi col-7">
              <div className="card">
                <h3 className="wifi-title"><FaWifi size={38}/> WiFi</h3>
                <h5>Poly_Guest</h5>
                <h5><strong>Login:</strong> Name & Email</h5>
              </div>
            </div>
          </div>
          
          <div className="row">
            <Radio />
          </div>
        </div>
        
        <div className="announcements col-6">
          <Announcements />
        </div>
      </div>
    );
  }
}

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
                <h5><FaDiscord size={23}/>
                  <a href="https://phoenixhacks.com/discord" className="" target="_blank" rel="noopener noreferrer">
                  Discord</a></h5>
                <h5><img style={{height: "23px", marginRight: "-3px"}} src={require("../images/devpost-icon3.png")}/>
                  <a href="https://phoenixhacks2020.devpost.com" className="" target="_blank" rel="noopener noreferrer">
                  DevPost</a></h5>
                <h5><FaImages size={23}/>
                  <a href="https://phoenixhacks.com/media" className="" target="_blank" rel="noopener noreferrer">
                  Media</a></h5>
              </div>
            </div>

            <div className="wifi col-7">
              <div className="card justify-content-center">
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

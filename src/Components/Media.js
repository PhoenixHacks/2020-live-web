import React, { Component } from "react";
import Radio from "./Radio";
import Announcements from "./Announcements";
import { FaWifi, FaDiscord, FaUpload, FaImages } from 'react-icons/fa';

const MediaLinks = () => {
  return (
    <div className="media-links col-7">
      <div className="card d-flex justify-content-center" style={{height: "130px"}}>
        <h5><FaDiscord/>
          <a href="https://phoenixhacks.com/discord" className="" target="_blank" rel="noopener noreferrer">
          Discord</a></h5>
        <h5><img style={{marginRight: "-3px"}} src={require("../images/devpost-icon3.png")}/>
          <a href="https://phoenixhacks2020.devpost.com" className="" target="_blank" rel="noopener noreferrer">
          DevPost</a></h5>
        <h5><FaImages/>
          <a href="https://phoenixhacks.com/media" className="" target="_blank" rel="noopener noreferrer">
          Media</a></h5>
        {/*
        <div className="col">
          <h5 className="row"><i class="fa fa-question-circle" aria-hidden="true"></i>
            <a href="https://phoenixhacks.com#FAQ" className="" target="_blank" rel="noopener noreferrer">
            FAQ</a></h5>
        </div>*/}
      </div>
    </div>
  )
}

const Wifi = () => {
  return (
    <div className="wifi col-5">
      <div className="card justify-content-center">
        <h3 className="wifi-title"><i class="fa fa-wifi"></i> WiFi</h3>
        <h5>Poly_Guest</h5>
        <h5>Login Page</h5>
      </div>
    </div>
  )
}

export default class Media extends React.Component {
  render() {
    return (
      <div className="media row">
        <div className="media-info col-lg-6">

          <div className="row">
            <MediaLinks />
            <Wifi />
          </div>
          
          <div className="row">
            <Radio />
          </div>
        </div>
        
        <div className="announcements col-lg-6">
          <Announcements />
        </div>
      </div>
    );
  }
}

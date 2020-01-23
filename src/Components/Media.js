import React from "react";
//import Radio from "./Radio";
import Announcements from "./Announcements";
import { FaDiscord, FaUpload, FaImages } from 'react-icons/fa';

const Link = ({text, icon, link}) => (
  <h5>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}&nbsp;{text}
    </a>
  </h5>
)

const Links = () => (
  <div id="links">
    <Link text={"Discord"} icon={<FaDiscord/>} link={"https://phoenixhacks.com/discord"}/>
    <Link text={"DevPost"} icon={<FaUpload/>} link={"https://phoenixhacks2020.devpost.com"}/>
    
    {/* For media use something like google photos album or a social media page. */}
    <Link text={"Media"} icon={<FaImages/>} link={"https://phoenixhacks.com/media"}/>
    <Link text={"FAQ"} icon={<i className="fa fa-question-circle" aria-hidden="true"></i>} 
      link={"https://phoenixhacks.com#FAQ"}/>
  </div>
)

const Wifi = () => (
  <div id="wifi">
    <h3><i className="fa fa-wifi"></i> WiFi</h3>
    <h5>Poly_Guest</h5>
    <h5>Login Page</h5>
  </div>
)

const Radio = () => (
  <div id="radio">
    {/*<span><i className="fa fa-circle text-danger Blink"></i>&nbsp; LIVE</span>*/}
    <audio src="https://demo.azuracast.com/radio/8000/radio.mp3?1579048568" type="audio/mpeg" controls/>
  </div>
)

const Resources = () => (
  <div id="resources">
    <h3>RESOURCES</h3>
    <a href="https://github.com/dipakkr/A-to-Z-Resources-for-Students" target="_blank"><button>A-to-Z-Resources-for-Students</button></a>
    <a href="https://github.com/sahat/hackathon-starter" target="_blank"><button>Hackathon-Starter</button></a>
  </div>
)

export default class Media extends React.Component {
  //TODO: Add content to resources.

  render() {
    return (
      <div id="media">
        <div id="info">
          <Links />
          <Wifi />
          {/*<Radio />*/}
        </div>
        <Announcements />
        <Resources />
      </div>
    );
  }
}

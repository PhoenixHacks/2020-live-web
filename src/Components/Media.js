import React from "react";
//import Radio from "./Radio";
import Announcements from "./Announcements";
import { FaDiscord, FaUpload } from 'react-icons/fa';

const Link = ({text, icon, link}) => (
  <h5>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}&nbsp;{text}
    </a>
  </h5>
)

// The discord link: expires never, has max 100 uses
const Links = () => (
  <div id="links">
    <Link text="Discord" icon={<FaDiscord/>} link="https://discord.gg/z8NSpdz"/>
    <Link text="DevPost" icon={<FaUpload/>} link="https://phoenixhacks2020.devpost.com"/>
    
    {/* For media use something like google photos album or a social media page. */}
    {/*<Link text="Media" icon={<FaImages/>} link="https://phoenixhacks.com/media"/>
    <Link text="FAQ" icon={<i className="fa fa-question-circle" aria-hidden="true"></i>} 
      link="https://phoenixhacks.com#faq"/>*/}
  </div>
)

const Wifi = () => (
  <div id="wifi">
    <h3><i className="fa fa-wifi"></i> WiFi</h3>
    <h5>Poly_Guest</h5>
    <h5>Login Page</h5>
  </div>
)

/*
const Radio = () => (
  <div id="radio">
    <span><i className="fa fa-circle text-danger Blink"></i>&nbsp; LIVE</span>
    <audio src="https://demo.azuracast.com/radio/8000/radio.mp3?1579048568" type="audio/mpeg" controls/>
  </div>
)*/

const Button = ({text, link}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button>{text}</button>
  </a>
)

//<Button text="" link=""/>

const Resources = () => (
  <div id="resources">
    <h2>AWESOMES</h2>
    <div id="buttons">
      <Button text="*Student" link="https://github.com/dipakkr/A-to-Z-Resources-for-Students"/>
      <Button text="Awesomes" link="https://github.com/sindresorhus/awesome"/>
      <Button text="Codejam" link="https://github.com/mcgill-ecsess/awesome-codejam-resources"/>
      <Button text="API" link="https://github.com/TonnyL/Awesome_APIs"/>
      <Button text="Beginner" link="https://github.com/MunGell/awesome-for-beginners"/>
      <Button text="CheatSheet" link="https://lecoupa.github.io/awesome-cheatsheets/"/>
      <Button text="SearchList" link="https://awesomelists.top/"/>
      <Button text="SearchOS" link="https://awesomeopensource.com/"/>

      {/*<Button text="Hackathon Starter" link="https://github.com/sahat/hackathon-starter"/>*/}
      {/*<Button text="Github Student Pack" link="https://education.github.com/pack"/>*/}
      {/*<Button text="Hackathon Tools" link="https://nyhackathons.com/tools/"/>*/}
      {/*<Button text="Hacker Resources" link="https://aechackathon.com/hacker-resources/"/>*/}
    </div>
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

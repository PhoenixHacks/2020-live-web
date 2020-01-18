import React from "react";

import config from "../services/config";
import announcements from "../services/announcements";
import Discordio from './DiscordBot/Discordio'
import Discordjs from './DiscordBot/Discordjs'

export default class Announcements extends React.Component {

  render() {

    return (
      <div className="card">
        <h2 className="announcements-title">
          <b>Announcements</b>
        </h2>
        <ul className="announcements-list">
          {/*<Discordjs />
          <Discordio />*/}

          {/*announcements.length > 0 ? (
            announcements.map(announcement => (
              <li>
                <span style={{ fontSize: "20px" }}>
                  <span>
                    <b style={{ color: "#8f40bf" }}>{announcement.time}</b>
                  </span>
                  &nbsp;
                  <span>{announcement.message}</span>
                </span>
              </li>
            ))
          ) : (
            <p>No current announcements.</p>
          )*/}
        </ul>
      </div>
    );
  }
}

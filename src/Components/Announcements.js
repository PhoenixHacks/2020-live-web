import React from "react";
import openSocket from "socket.io-client";

import config from "../services/config";
import announcements from "../services/announcements";
import Radio from "../Components/Radio";

const socket = openSocket(config.API_URL);

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { announcements: [] };

    socket.on("announcement", data => {
      let { announcements } = this.state;

      announcements.unshift(data);

      this.setState({ announcements });
    });
  }

  async componentDidMount() {
    const data = await announcements.read();

    this.setState({ announcements: data });
  }

  read = async () => {
    const data = await announcements.read();

    this.setState({ announcements: data });
  };

  render() {
    const { announcements } = this.state;

    return (
      
      <div
        className="announcements"
        style={{
          height: "fit-content",
          maxHeight: "300px"
        }}
      >
        {/*<Radio />*/}
        <br />
        <h2>
          <b>Announcements</b>
        </h2>
        <ul className="announcements-list">
          {announcements.length > 0 ? (
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
          )}
        </ul>
      </div>
    );
  }
}

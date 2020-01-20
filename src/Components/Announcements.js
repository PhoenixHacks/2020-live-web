import React from "react";
import client from "socket.io-client";

import config from "../services/config";
import announcements from "../services/announcements";
import Radio from "../Components/Radio";


const socket = client.connect(config.API_URL, { path: '/announcements' });

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { announcements: [] };

    socket.on("announcements", data => {
      let { announcements } = this.state;

      announcements.unshift(data);

      this.setState({ announcements });
    });
  }



  async componentDidMount() {
    const data = await announcements.read();

    this.setState({ announcements: data });
  }

  async componentDidUpdate() {
    this.scrollToBottom();
  }

  read = async () => {
    const data = await announcements.read();

    this.setState({ announcements: data });
  };

  scrollToBottom(element) {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  processTime(time) {
    let today = new Date().getDate();
    let datetime = new Date(time)

    //let hour = time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")
    let day = datetime.getDate()
    let hour = datetime.getHours()
    let minute = datetime.getMinutes()

    if (day === today) {
      day = "Today"
    } else {
      day = "Yesterday"
    }

    if (hour === 0) {
      hour = 12 + ":" + minute + " AM"
    } else if (hour < 12) {
      hour = hour + ":" + minute + " AM"
    } else {
      hour = hour + ":" + minute + " PM"
    }

    return day + " at " + hour
  }

  render() {
    const { announcements } = this.state;

    return (
      <div className="">
        <h2 className="announcements-title">
          <b>ANNOUNCEMENTS</b>
        </h2>
        <ul className="announcements-list" ref={(ul) => {this.messageList = ul;}}>
          {announcements.length > 0 ? (
            announcements[0].map(announcement => (
              <li>
                <b style={{ color: "#586165" }}>
                  {this.processTime(announcement.time)}
                </b><br/>
                {/*&nbsp;*/}
                <span style={{ fontSize: "20px", color: "#ffffff" }}>{announcement.message}</span>
                <hr/>
              </li>
            ))
          ) : (
            <p style={{ color: "#586165" }}>No current announcements.</p>
          )}
        </ul>
      </div>
    );
  }
}

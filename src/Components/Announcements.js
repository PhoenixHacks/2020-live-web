import React from "react";
import io from "socket.io-client";

import config from "../services/config";
import announcements from "../services/announcements";

const socket = io(config.API_URL, { path: '/announcements' });

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { announcements: [] };

    socket.on("announcements", data => {
      this.setState({ announcements: data.reverse() });
    });

    socket.on('disconnect', (reason) => {
      if (reason === 'io server disconnect') {
        socket.connect();
      }
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
    let minute = ("0" + datetime.getMinutes()).slice(-2);

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
    //TODO: white border around the announcements
    // - experimented with different colors; not sure; need feedback
    
    //DONE: fix issue with message being sent multiple times
    
    //TODO: fix issue with content disappearing (timeout?)
    // - I thought it was due to my SSH tunnel being poor but it
    //   still happens locally so this is not solved yet
    
    //DONE: fix issue with unshift error

    return (
      <div id="announcements">
        <h2>ANNOUNCEMENTS</h2>

        <ul ref={(ul) => {this.messageList = ul;}}>
          {announcements.length > 0 ? (
            announcements.map(announcement => (
              <li key={announcement.time}>
                <b style={{ color: "#586165" }}>
                  {this.processTime(announcement.time)}
                </b><br/>
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

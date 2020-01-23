import React from "react";
import io from "socket.io-client";
import ReactMarkdown from 'react-markdown';

import config from "../services/config";
//import announcements from "../services/announcements";

const socket = io(config.API_URL, { path: '/announcements' });

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { announcements: [] };
  }

  async componentDidMount() {
    this.subscribeToAnnouncements();
  }

  async componentDidUpdate() {
    this.subscribeToAnnouncements();
    this.scrollToBottom();
  }

  subscribeToAnnouncements() {
    socket.on("announcements", data => {
      this.setState({ announcements: data });
    });
  }

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
      hour = (hour - 12) + ":" + minute + " PM"
    }

    return day + " at " + hour
  }

  render() {
    const { announcements } = this.state;
    //TODO: Maintain the scroll bar position when updating the chat.

    return (
      <div id="announcements">
        <h2>ANNOUNCEMENTS</h2>

        <ul ref={(ul) => {this.messageList = ul;}}>
          {announcements.length > 0 ? (
            announcements.map(announcement => (
              <li key={announcement.time}>
                <b>{this.processTime(announcement.time)}</b>
                <br/>
                <span><ReactMarkdown source={announcement.message}/></span>
                <hr/>
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

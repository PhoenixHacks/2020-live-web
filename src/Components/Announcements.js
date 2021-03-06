import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import ReactMarkdown from 'react-markdown';

import config from "../services/config";

const Announcements = ({ }) => {
  const [announcements, setAnnouncements] = useState("");
  const messageList = useRef();

  useEffect(() => {
    const socket = io(config.API_URL, { path: '/announcements' });
    socket.on("announcements", data => {
      setAnnouncements(data);
      scrollToBottom();
    });

    // CLEAN UP
    return () => socket.disconnect();
  }, [])

  const processTime = (time) => {
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

  const scrollToBottom = () => {
    const scrollHeight = messageList.current.scrollHeight;
    const height = messageList.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messageList.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  return (
    <div id="announcements">
      <h2>ANNOUNCEMENTS</h2>

      <ul ref={messageList} onClick={() => scrollToBottom()}>
        {announcements.length > 0 ? (
          announcements.map(announcement => (
            <li key={announcement.time}>
              <b>{processTime(announcement.time)}</b>
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
  )
}

export default Announcements;
import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import events from "../services/events";

export default class Schedule extends React.Component {
  state = { now: null };

  componentDidMount = () => this.time();

  time = () => {
    return setInterval(() => {
      this.setState({ now: new Date().getTime() });
    }, 1000);
  };

  tagFilter(tag) {
    return function(event) {
      return event.tags.includes(tag);
    }
  }

  dateFilter(date) {
    return function(event) {
      return event.date === date;
    }
  }

  formatTime(start, end) {
    if (start === end) {
      return start;
    } else {
      return (start + '-' + end);
    }
  }

  tableSection(day, date, tab) {
    //TODO: reconsider the entire schedule design
    //DONE: gray out (or remove?) past events
      //- currently utilizing strikethrough
    //DONE: indicate which events are currently active
      //- still not sure of the best method;
      //  currently have an animation that alternates color
    //TODO: drop downs for the events (that show description)
    //DONE: make AM and PM capital letters
    //TODO: make border and tab purple with white text
      //- need feedback

    let { now } = this.state
    
    return (
      <div id="day">
        <h3>{day}</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{width: "30%"}}>Time</th>
              <th style={{width: "50%"}}>Event/Activity</th>
              <th style={{width: "20%"}}>Location</th>
            </tr>
          </thead>
          <tbody>
            {tab.filter(this.dateFilter(date)).map((event, index) => (
              <tr key={event.name} 
                className={ this.eventStatus(event, now) }>
                <th>
                  {this.formatTime(event.time.start, event.time.end)}
                </th>
                <td>{event.name}</td>
                <td>{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderTab(tab) {
    return (
      <div id="tab">
        {this.tableSection("Saturday, January 25", '2020-01-25', tab)}
        {this.tableSection("Sunday, January 26", '2020-01-26', tab)}
      </div>
    );
  }

  getTimes(event) {
    let { start, end } = event.time

    let eventStart = new Date(event.date + 'T' + start + 'Z').getTime();
    let eventEnd = new Date(event.date + 'T' + end + 'Z').getTime();

    return { eventStart, eventEnd }
  }

  eventStatus(event, now) {
    let { eventStart, eventEnd } = this.getTimes(event);
    return (now > eventStart && now < eventEnd) ? "Active"
      : (now > eventEnd) ? "expired" : "";
  }

  render() {
    const logistics = events.filter(this.tagFilter("logistics"));
    const meals = events.filter(this.tagFilter("meal"));
    const workshops = events.filter(this.tagFilter("workshop"));
    const activities = events.filter(this.tagFilter("activity"));

    return (
      <div id="schedule">
        <Tabs defaultActiveKey="all-events">
          <Tab eventKey="all-events" title="All Events">
            {this.renderTab(events)}
          </Tab>
          <Tab eventKey="logistics" title="Logistics">
            {this.renderTab(logistics)}
          </Tab>
          <Tab eventKey="meals" title="Meals">
            {this.renderTab(meals)}
          </Tab>
          <Tab eventKey="workshops" title="Workshops">
            {this.renderTab(workshops)}
          </Tab>
          <Tab eventKey="activities" title="Activities">
            {this.renderTab(activities)}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

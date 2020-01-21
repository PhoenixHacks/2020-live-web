import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default class Schedule extends React.Component {

  tagFilter(event_tag) {
    return function(event) {
      return event.tags.includes(event_tag);
    }
  }

  dayFilter(event_day) {
    return function(event) {
      return event.datetime.day === event_day;
    }
  }

  tableSection(daytext, day, tab) {
    //TODO: reconsider the entire schedule design
    //TODO: gray out (or remove?) past events
    //TODO: indicate which events are currently active
    //TODO: drop downs for the events (that show description)
    //TODO: make AM and PM capital letters
    
    return (
      <div id="day">
        <h3>{daytext}</h3>
        <table className="table table-hover">
          <thead>
            <tr className="">
              <th scope="col" style={{width: "30%"}}>Time</th>
              <th scope="col" style={{width: "50%"}}>Event/Activity</th>
              <th scope="col" style={{width: "20%"}}>Location</th>
            </tr>
          </thead>
          <tbody>
            {tab.filter(this.dayFilter(day)).map((item, index) => (
              <tr key={item.event}>
                <th scope="row">{item.datetime.start}-{item.datetime.end}</th>
                <td>{item.event}</td>
                <td>{item.location}</td>
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
        {this.tableSection("Saturday, January 25", "25", tab)}
        {this.tableSection("Sunday, January 26", "26", tab)}
      </div>
    );
  }

  removeMeridiem(time) {
    time = time.split("am").pop();
    time = time.split("pm").pop();
    return time;
  }

  eventActive(event, now) {
    let { start, end, day } = event.datetime

    start = this.removeMeridiem(start)
    end = this.removeMeridiem(end)

    var eventStart = new Date("Jan " + day + ", 2020 " + start + ":00").getTime();
    var eventEnd = new Date("Jan " + day + ", 2020 " + end + ":00").getTime();

    if (now > eventStart && now < eventEnd) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const data = require("../data/schedule.json");
    const schedule = data.schedule;
    const logistics = schedule.filter(this.tagFilter("logistics"));
    const meals = schedule.filter(this.tagFilter("meal"));
    const workshops = schedule.filter(this.tagFilter("workshop"));
    const activities = schedule.filter(this.tagFilter("activity"));

    return (
      <div id="schedule">
        <Tabs defaultActiveKey="all-events" id="uncontrolled-tab-example">
          <Tab eventKey="all-events" title="All Events">
            {this.renderTab(schedule)}
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

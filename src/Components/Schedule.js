import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default class Schedule extends React.Component {

  tagFilter(event_tag) {
    return function(element) {
      return element.tags.includes(event_tag);
    }
  }

  dayFilter(event_day) {
    return function(element) {
      return element.datetime.day === event_day;
    }
  }

  renderTab(tab) {
    return (
      <div className="schedule">
        <ul className="event-list">
          {tab.map((item, index) => (
            <li key={index}>
              <span className="row event-header">
                <span className="event" style={{ fontSize: "25px" }}>
                  <b>{item.event}</b>
                </span>

                {/*TODO: 
                    - Display time better: include date or day and fix formatting issues
                    - Gray out or remove events that have already passed
                    - Make current events distinct (color and/or blinking effect)
                */}
                <span className="time" style={{ color: "#8f40bf" }}>
                  <b>{item.time}</b>
                </span>
              </span>
              <span className="row description">
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  tableSection(daytext, day, tab) {
    return (
      <React.Fragment>
        <h3 class="head-space">{daytext}</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Event/Activity</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {tab.filter(this.dayFilter(day)).map((item, index) => (
              <tr className={ item.tags.includes("success") ? "table-success" 
                  : (item.tags.includes("warning") ? "table-warning" : "") }>
                <th scope="row">{item.datetime.start}-{item.datetime.end}</th>
                <td>{item.event}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  renderTab2(tab) {
    return (
      <div class="card-body event-list row" id="schedule">
        <div className="col">
          {this.tableSection("Saturday, Janurary 25", "25", tab)}
        </div>
        <div className="col">
          {this.tableSection("Sunday, Janurary 26", "26", tab)}
        </div>
        {/* 
        <tr class="table-warning">
          <th scope="row">12:00pm</th>
          <td><i class="fas fa-exclamation-circle"></i> Devpost Submissions Due</td>
          <td>--</td>
        </tr> 
        */}
      </div>
    );
  }

  render() {
    const data = require("../data/schedule.json");
    const schedule = data.schedule;
    const logistics = schedule.filter(this.tagFilter("logistics"));
    const meals = schedule.filter(this.tagFilter("meal"));
    const workshops = schedule.filter(this.tagFilter("workshop"));
    const activities = schedule.filter(this.tagFilter("activity"));

    return (
      <Tabs defaultActiveKey="all-events" id="uncontrolled-tab-example">
        <Tab eventKey="all-events" title="All Events">
          {this.renderTab2(schedule)}
        </Tab>
        <Tab eventKey="logistics" title="Logistics">
          {this.renderTab2(logistics)}
        </Tab>
        <Tab eventKey="meals" title="Meals">
          {this.renderTab2(meals)}
        </Tab>
        <Tab eventKey="workshops" title="Workshops">
          {this.renderTab2(workshops)}
        </Tab>
        <Tab eventKey="activities" title="Activities">
          {this.renderTab2(activities)}
        </Tab>
      </Tabs>
    );
  }
}

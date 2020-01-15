import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default class Schedule extends React.Component {

  typeFilter(event_type) {
    return function(element) {
      return element.type === event_type;
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
                {/*TODO: Display time better (include date or day)*/}
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

  render() {
    const data = require("../data/schedule.json");
    const schedule = data.schedule;
    const logistics = schedule.filter(this.typeFilter("logistics"));
    const meals = schedule.filter(this.typeFilter("meal"));
    const workshops = schedule.filter(this.typeFilter("workshop"));
    const activities = schedule.filter(this.typeFilter("activity"));

    return (
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
    );
  }
}

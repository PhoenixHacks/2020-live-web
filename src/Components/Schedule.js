import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import events from "../services/events";

import {FaAngleDown} from 'react-icons/fa'

export default class Schedule extends React.Component {
  state = { now: null };

  //===Clock====================================================================

  componentDidMount = () => this.time();
  time = () => setInterval( () => {
    this.setState({ now: new Date().getTime() }); 
  }, 1000);

  //===Filters==================================================================

  tagFilter = (tag) => (event) => event.tags.includes(tag);
  dateFilter = (date) => (event) => event.date === date;
  removeStatusFilter = (status) => (event) => this.eventStatus(event, now) !== status;

  //===Formatting===============================================================

  getDates(event) {
    let { start, end } = event.time;
    let es = new Date(event.date + 'T' + start + 'Z');
    let ee = new Date(event.date + 'T' + end + 'Z');

    let ESToffset = 300; //Timezone offset for EST in minutes.
    let eventStart = new Date( es.getTime() + ESToffset*60*1000 );
    let eventEnd = new Date( ee.getTime() + ESToffset*60*1000 );
    return { eventStart, eventEnd };
  }

  getTimes(event) {
    let { eventStart, eventEnd } = this.getDates(event);
    eventStart = eventStart.getTime();
    eventEnd = eventEnd.getTime();

    return { eventStart, eventEnd };
  }

  formatTime(time) {
    let minute = ("0" + time.getMinutes()).slice(-2);
    let hour = time.getHours();
    let meridian = 'AM';
    if (hour === 0) { hour = 12 }
    else if (hour === 12) { meridian = 'PM'; }
    else if (hour > 12) { hour -= 12; meridian = 'PM'; }
    hour = ("0" + hour).slice(-2);

    return (hour + ':' + minute + meridian);
  }

  formatTimes(event) {
    let { eventStart, eventEnd } = this.getDates(event);
    let start = this.formatTime(eventStart);
    let end = this.formatTime(eventEnd);
    
    if (start === end) {
      return start;
    } else {
      return (start + '-' + end);
    }
  }

  formatDateText(datetext) {
    let date = new Date(datetext + 'T12:00:00Z');
    let weekday = date.toLocaleString('en-US', { weekday: 'long'});
    let month = date.toLocaleString('en-US', { month: 'long'});
    let monthday = date.getDate();

    return weekday + ', ' + month + ' ' + monthday;
  }

  //===States==================================================================

  eventStatus(event, now) {
    let { eventStart, eventEnd } = this.getTimes(event);
    /*
    return (now > eventStart && now < eventEnd) ?  { class: "Active", id: "greenlight" }
      : (now > eventEnd) ? { class: "expired", id: "redlight" } : { class: "", id: "" };*/
    /*
      return (now > eventStart && now < eventEnd) ?  { class: "", id: "greenlight" }
      : (now > eventEnd) ? { class: "expired", id: "" } : { class: "", id: "" };*/
    return (now > eventStart && now < eventEnd) ? { status: 'active' }
    : (now > eventEnd) ? { status: 'expired'} : { status: 'normal' }
  }

  dropDown(name) {
    let rows = document.getElementsByName(name);
    for (let i=0; i < rows.length; i++) {
      rows[i].className = (rows[i].className === "hiddenRow") ? "" : "hiddenRow";
    }
  }

  tableSection(datetext, tabEvents) {
    //DONE: gray out (or remove?) past events
    //DONE: indicate which events are currently active
      //TODO - still not sure of the best method;
            // currently have an animation that alternates color

    //DONE: drop downs for the events (that show description)
      //TODO - now I just need actual content for these dropdowns

    //DONE: make AM and PM capital letters
    //DONE: make border and tab purple with white text
    //DONE: add a vertical indicator at the beginning of certain rows
    //TODO: The active event will have it's dropdown activated.
    //DONE: Fix the 12:00AM --> 12:00PM
    //TODO: Put the past events into it's own tab.

    let { now } = this.state;
    let statusFilteredEvents = tabEvents.filter(this.removeStatusFilter('expired'))
    let dateFilteredEvents = tabEvents.filter(this.dateFilter(datetext));

    
    if (dateFilteredEvents && dateFilteredEvents.length) {
      return (
        <div id="day">
          <h3>{this.formatDateText(datetext)}</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{width: "0.6%"}} className="indicator"></th>
                <th style={{width: "24.7%"}}>Time</th>
                <th style={{width: "50%"}}>Event/Activity <FaAngleDown id="dropdown-arrow"/></th>
                <th style={{width: "24.7%"}}>Location</th>
              </tr>
            </thead>
            <tbody>
              {dateFilteredEvents.map((event, index) => (<>
                <tr key={event.name} onClick={ () => this.dropDown(event.name) }
                  className={ this.eventStatus(event, now).class }>
                  {/*<td id={event.tags[1]} className="indicator"></td>*/}
                  <td id={ this.eventStatus(event, now).id } className="indicator"></td>
                  <th>{this.formatTimes(event)}</th>
                  <td>{event.name}</td>
                  <td>{event.location}</td>
                </tr>
                <tr name={event.name} className="hiddenRow" id="dropdown">
                  <td colSpan="4">{event.description}</td>
                </tr>
              </>))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  renderTab(tabEvents) {
    let days = [...new Set(tabEvents.map( (event) => event.date ))];

    return (
      <div id="tab">
        {days.map((day) => <>{this.tableSection(day, tabEvents)}</>)}
      </div>
    );
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

import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import events from "../services/events";

import { useMediaQuery } from 'react-responsive';

const DescriptionRow = ({ event }) => {
  const isPhoneWide = useMediaQuery({ query: '(min-device-width: 480px)' });

  return !isPhoneWide ? (<>
    <td colSpan="3">
      <table>
        <tbody>
          <tr>
            <th className="small-location">Location</th>
            <td rowSpan="2">{event.description}</td>
          </tr>
          <tr>
            <td className="small-location">{ (event.location.length > 0) ? event.location : "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </td></>
  ) : ( 
  <td colSpan="4">
    <p>{event.description}</p>
  </td> )
}

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
  statusFilter = (status, now) => (event) => this.eventStatus(event, now).status === status;
  statusRemovalFilter = (status, now) => (event) => this.eventStatus(event, now).status !== status;

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
    //(event.name === 'Werewolf') ? console.log(eventEnd) : console.log("");
    eventStart = eventStart.getTime();
    eventEnd = eventEnd.getTime();

    return { eventStart, eventEnd };
  }

  formatTime(time) {
    let minute = ("0" + time.getMinutes()).slice(-2);
    let hour = time.getHours();
    let meridian = (hour < 12) ? 'AM' : 'PM';
    hour = ("0" + ((hour % 12) || 12)).slice(-2);

    return (hour + ':' + minute + meridian);
  }

  formatTimes(event) {
    let { eventStart, eventEnd } = this.getDates(event);
    let start = this.formatTime(eventStart);
    let end = this.formatTime(eventEnd);

    return (start === end) ? start : (start + '-' + end);
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

    return (now > eventStart && now < eventEnd) ? { status: 'active' }
    : (now > eventEnd) ? { status: 'expired'} : { status: 'normal' }
  }

  isActive(event, now) {
    let status = this.eventStatus(event, now).status
    return (status === 'active') ? { class: status, id: 'greenlight' } : { class: "", id: "" };
  }

  toggleDescription(name) {
    let rows = document.getElementsByName(name);
    for (let i=0; i < rows.length; i++) {
      rows[i].className = (rows[i].className === "hiddenRow") ? "" : "hiddenRow";
    }
  }

  tableSection(datetext, tabEvents) {
    //TODO: add content to the event dropdowns
    //TODO: Refine the hidden location and content

    let { now } = this.state;
    let dateFilteredEvents = tabEvents.filter(this.dateFilter(datetext));
    
    if (dateFilteredEvents && dateFilteredEvents.length) {
      return (
        <div id="day">
          <h3>{this.formatDateText(datetext)}</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{width: "0.6%"}} className="indicator"></th>
                <th style={{width: "25%"}}>Time</th>
                <th style={{width: "auto"}}>Event</th>
                <th style={{width: "24.7%"}} className="large-location">Location</th>
              </tr>
            </thead>
            <tbody>
              {dateFilteredEvents.map((event, index) => (<>
                <tr key={event.name} onClick={ () => this.toggleDescription(event.name) }
                  className={ this.eventStatus(event, now).status }>
                  <td id={ this.isActive(event, now).id } className="indicator"></td>
                  <th>{this.formatTimes(event)}</th>
                  <td>{event.name}</td>
                  <td className="large-location">{event.location}</td>
                </tr>
                <tr name={event.name} className="hiddenRow" id="dropdown">
                  <DescriptionRow event={event}/>
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
    let { now } = this.state;

    const nonExpiredEvents = events.filter(this.statusRemovalFilter('expired', now));

    const logistics = nonExpiredEvents.filter(this.tagFilter("logistics"));
    const meals = nonExpiredEvents.filter(this.tagFilter("meal"));
    const workshops = nonExpiredEvents.filter(this.tagFilter("workshop"));
    const activities = nonExpiredEvents.filter(this.tagFilter("activity"));

    const expiredEvents = events.filter(this.statusFilter('expired', now));
    
    return (
      <div id="schedule">
        <Tabs defaultActiveKey="all-events">
          <Tab eventKey="all-events" title="General">
            {this.renderTab(nonExpiredEvents)}
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
          <Tab eventKey="expired-events" title="Expired">
            {this.renderTab(expiredEvents)}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

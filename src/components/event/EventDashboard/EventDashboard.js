import React, { Component } from "react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import uuid from "uuid/v1";
import {createEvent,deleteEvent,updateEvent} from '../eventActions';

const mapStateToProps = (state) => ({
  events:state.events
});

const actions ={
  createEvent,
  deleteEvent,
  updateEvent,
}

class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedEvent: null
    };
  }
  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };
  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  handleEditEvent = eventToUpdate => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  };
  handleCreateEvent = newEvent => {
    newEvent.id = uuid();
    newEvent.hostPhotoURL = "./assets/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      
      isOpen: false
    });
  };
  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };
  handleDeleteEvent = eventId => () => {
    //filter returns new array removing the given condition
    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // });
    this.props.deleteEvent(eventId);
  };

  render() {
    const { selectedEvent } = this.state;
    const {events} = this.props;

    return (
      <div className="container " id="event">
        <div className="row">
          <div className="col-lg-8">
            <EventList
              deleteEvents={this.handleDeleteEvent}
              onEventEdit={this.handleEditEvent}
              events={events}
            />
          </div>
          <div className="col-lg-4">
            <button onClick={this.handleFormOpen} className="btn btn-success">
              Create Event
            </button>
            {this.state.isOpen && (
              <EventForm
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                handleCancel={this.handleCancel}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,actions)(EventDashboard);

import React, { Component } from "react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import {deleteEvent} from '../eventActions';
import {addFlashMessage} from '../../../app/actions/flashMessagesAction';

const mapStateToProps = (state) => ({
  events:state.events
});

const actions ={
  deleteEvent,
  addFlashMessage
}

class EventDashboard extends Component {


 
  handleDeleteEvent = eventId => () => {
    //filter returns new array removing the given condition
    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // });
    this.props.addFlashMessage({
      type:"success",
      text:"Event Deleted Successfully 😊"
  })
    this.props.deleteEvent(eventId);
  };

  render() {
    const {events} = this.props;
    return (
      <div className="container " id="event">
        
        <div className="row">
          <div className="col-lg-8">
            <EventList
              deleteEvents={this.handleDeleteEvent}
              events={events}
            />
          </div>
          <div className="col-lg-4">
            
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,actions)(EventDashboard);

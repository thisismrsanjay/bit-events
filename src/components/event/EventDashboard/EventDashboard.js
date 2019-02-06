import React, { Component } from "react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import {deleteEvent} from '../eventActions';
import {addFlashMessage} from '../../../app/actions/flashMessagesAction';
import EventActivity from '../EventActivity/EventActivity';
import LoadingComponent from '../../../app/layout/LoadingComponent';


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
    const {events,loading} = this.props;
    if(loading) return <LoadingComponent/>
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
            <EventActivity/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events:state.events,
  loading:state.async.loading
});

const actions ={
  deleteEvent,
  addFlashMessage
}



export default connect(mapStateToProps,actions)(EventDashboard);

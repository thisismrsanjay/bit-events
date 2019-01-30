import React, { Component } from "react";
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import uuid from 'uuid/v1';

  


class EventDashboard extends Component {

    constructor(props){
        super(props);
        this.state= {
            events : eventsData,
            isOpen:false,
            selectedEvent : null
        };
    }
    handleFormOpen=()=>{
        this.setState({
            selectedEvent:null,
            isOpen:true
        })
    }
    handleCancel=()=>{
        this.setState({
            isOpen:false
        })
    }
    handleEditEvent =(eventToUpdate)=>()=>{
      this.setState({
        selectedEvent:eventToUpdate,
        isOpen:true
      })
    }
    handleCreateEvent = (newEvent)=>{
      newEvent.id =uuid();
      newEvent.hostPhotoURL = './assets/user.png';
      const updatedEvents = [...this.state.events,newEvent];
      this.setState({
        events:updatedEvents,
        isOpen:false
      })
    }
    handleUpdateEvent = (updatedEvent)=>{
      this.setState({
        events:this.state.events.map(event=>{
          if(event.id===updatedEvent.id){
            return Object.assign({},updatedEvent);
          }else{
            return event;
          }
        }),
        isOpen:false,
        selectedEvent:null
      })
    }
    handleDeleteEvent=(eventId)=>()=>{
      //filter returns new array removing the given condition
      const updatedEvents= this.state.events.filter(e=>e.id!==eventId);
      this.setState({
        events:updatedEvents
      })
    }

  render() {
    const {selectedEvent} = this.state;

    return (
        <div className="container " id="event">
            <div className="row">
                <div className="col-lg-8">
                   <EventList deleteEvents={this.handleDeleteEvent} onEventEdit={this.handleEditEvent} events = {this.state.events}/>
                </div>
                <div className="col-lg-4">
                    <button onClick={this.handleFormOpen} className="btn btn-success">Create Event</button>
                    {this.state.isOpen && 
                    <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent= {this.handleCreateEvent} handleCancel={this.handleCancel}/>}
                </div>
            </div>
        </div>
    );
  }
}

export default EventDashboard;

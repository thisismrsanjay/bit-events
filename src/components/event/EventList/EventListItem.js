import React, { Component } from "react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const {event} = this.props;
    return (
      <div className="card text-left mb-3 shadow  bg-white ">
        <div className="card-body border-bottom p-1 rounded ">
            <div className="d-flex flex-row bd-highlight ">
                <div className="p-2 bd-highlight">
                    <img width="60px" src={event.hostPhotoURL} className=" rounded-circle" alt=""/>
                </div>
                <div className="p-2 bd-highlight">
                    <h4 >{event.title}</h4>
                    <h6 className=" text-muted">{event.hostedBy}</h6>
                </div>
            </div>
        </div>
        <div className="p-2 card-body border-bottom  ">
        <i className="fas fa-clock "></i> {event.date} | 
        <i className="fas fa-map-marker pl-2 "></i> {event.venue}
        </div>
        <div className="card-body d-flex flex-row">
        {event.attendees.map(attendee=>(
          <EventListAttendee key={attendee.id} attendee={attendee}/>
        ))}
          
        </div>
        <div className="card-footer text-muted ">
        <div className="gird">
          <div className="row">
            <div className="col-md-10">
              {event.description}
            </div>
            <div className="col-md-2">
             <button className="btn btn-primary  float-right ">View</button>
            </div>
          </div>
        </div>
       
       
        </div>
      </div>
    );
  }
}
export default EventListItem;

import React from "react";

const eventImageStyle = {
  filter: "brightness(30%)"
};
const eventImageTextStyle = {
  position: "absolute",
  marginBottom: "6.75rem",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};


const EventDetailedHeader=({event}) =>{
  return (
    <div className="card" styles={"width: 18rem;"}>
      <img
        style={eventImageStyle}
        src={`/assets/categoryImages/${event.category}.jpg`}
        className="card-img-top"
        alt="..."
      />

      <div className="eventImageText" style={eventImageTextStyle}>
        <h3 className="card-title">{event.title}</h3>
        <p className="card-text">
         {event.date} <br/>
         Hosted by <strong>{event.hostedBy}</strong>
        </p>
      </div>
      <div className="card-body">
        <button href="#" className="btn btn-primary">
          JOIN THIS EVENT
        </button>
      </div>
    </div>
  );
}
export default EventDetailedHeader;
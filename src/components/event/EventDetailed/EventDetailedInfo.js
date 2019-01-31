import React from "react";

const  EventDetailedInfo=({event}) =>{
  return (
    <div className="card mt-3">
      <div className="card-body border-bottom">
         <span role="img" aria-label="sheep">📋</span>  {event.description}
      </div>{" "}
      <div className="card-body border-bottom">
         <span role="img" aria-label="sheep">📅</span>  {event.date}
      </div>{" "}
      <div className="card-body">
         <span role="img" aria-label="sheep">📌</span>  {event.venue}
        <button className="btn btn-primary float-right">Show Map</button>
      </div>
    </div>
  );
}

export default EventDetailedInfo;
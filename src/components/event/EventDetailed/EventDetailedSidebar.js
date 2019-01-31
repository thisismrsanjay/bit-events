import React from "react";
import "./sidebar.css";

export default function EventDetailedSidebar({ attendees }) {
  return (
    <div className="card">
      <div className="card-header bg-info text-light text-center">
        {attendees && attendees.length } People Going
      </div>
      <ul className="list-group list-group-flush">
        {attendees &&
          attendees.map(attendee => (
            <li key={attendee.id} className="list-group-item">
              <img
                src={attendee.photoURL}
                alt=""
                style={{ maxWidth: "30%" }}
                className="img-thumbnail float-left"
              />
              <h2
                className="text-info  align-center  "
                style={{ lineHeight: "3" }}
              >
                {attendee.name}
              </h2>
            </li>
          ))}
      </ul>
    </div>
  );
}

//label for host69

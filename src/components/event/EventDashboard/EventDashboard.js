import React, { Component } from "react";
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import uuid from 'uuid/v1';

const eventsData = [
        {
          id: '1',
          title: 'Trip to Tower of London',
          date: '2018-03-27T11:00:00+00:00',
          category: 'culture',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: "Tower of London, St Katharine's & Wapping, London",
          hostedBy: 'Bob',
          hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
          attendees: [
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
          ]
        },
        {
          id: '2',
          title: 'Trip to Punch and Judy Pub',
          date: '2018-03-28T14:00:00+00:00',
          category: 'drinks',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: 'Punch & Judy, Henrietta Street, London, UK',
          hostedBy: 'Tom',
          hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
          attendees: [
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
          ]
        }
      ]
      


class EventDashboard extends Component {

    constructor(props){
        super(props);
        this.state= {
            events : eventsData,
            isOpen:false
        };
    }
    handleFormOpen=()=>{
        this.setState({
            isOpen:true
        })
    }
    handleCancel=()=>{
        this.setState({
            isOpen:false
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

  render() {
    return (
        <div className="container " id="event">
            <div className="row">
                <div className="col-lg-8">
                   <EventList events = {this.state.events}/>
                </div>
                <div className="col-lg-4">
                    <button onClick={this.handleFormOpen} className="btn btn-success">Create Event</button>
                    {this.state.isOpen && 
                    <EventForm createEvent= {this.handleCreateEvent} handleCancel={this.handleCancel}/>}
                </div>
            </div>
        </div>
    );
  }
}

export default EventDashboard;

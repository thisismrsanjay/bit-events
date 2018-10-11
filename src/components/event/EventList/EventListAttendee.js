import React ,{Component} from 'react';

class EventListAttendee extends Component{
    render(){
        const {attendee} = this.props;
        return (
            <div>
              <img width="50" src={attendee.photoURL} alt="" className="pr-3 rounded-circle"/>  
              <p className="pt-3 mb-1">{attendee.name}</p>
            </div>
        )
    }
}
export default EventListAttendee;
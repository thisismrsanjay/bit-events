import React ,{Component} from 'react';
import EventListItem from './EventListItem';

class EventList extends Component{
    render(){
        const {events,deleteEvents} = this.props;
        return (
            <div>
                {events.map(event=>{
                    return <EventListItem deleteEvent={deleteEvents} key={event.id} event={event} />
                })}
                
            </div>
        )
    }
}
export default EventList;
import React ,{Component} from 'react';
import EventListItem from './EventListItem';

class EventList extends Component{
    render(){
        const {events,onEventEdit,deleteEvents} = this.props;
        return (
            <div>
                <h1>EventList</h1>
                {events.map(event=>{
                    return <EventListItem deleteEvent={deleteEvents} key={event.id} event={event} onEventEdit={onEventEdit}/>
                })}
                
            </div>
        )
    }
}
export default EventList;
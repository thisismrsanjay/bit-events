import React from 'react';
import {connect} from 'react-redux';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedDiscussion from './EventDetailedDiscussion'
import EventDetailedSidebar from './EventDetailedSidebar';
import { STATUS_CODES } from 'http';

const mapStateToProps= (state,ownProps)=>{
    const eventId = ownProps.match.params.id;
    let event = {};
    if(eventId && state.events.length>0){
        event = state.events.filter(event=>event.id==eventId)[0]
    }
    return {
        event
    }
}
const actions = ()=>{

}

//event will be componet props
const EventDetailedPage = ({event}) =>{
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col-lg-8">
                    <EventDetailedHeader event={event}/>
                    <EventDetailedInfo event={event}/>
                    <EventDetailedDiscussion/>
                </div>
                <div className="col-lg-4">
                    <EventDetailedSidebar attendees={event.attendees}/>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(EventDetailedPage) ;
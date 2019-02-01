import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {createEvent,updateEvent} from '../eventActions';
import cuid from 'cuid';


const mapStateToProps =(state,ownProps)=>{
    const eventId = ownProps.match.params.id;
    let event = {
        title:'',
        date:'',
        city:'',
        venue:'',
        hostedBy:'',
        attendees:[] 
    }
    if(eventId && state.events.length>0){
        event = state.events.filter(event=>event.id===eventId)[0];
    }
    return {
        event
    }
}
const actions ={
    createEvent,
    updateEvent
}

class EventForm extends Component {
    
    state={
        event:Object.assign({},this.props.event)
    }



    onFormSubmit= (event)=>{
        event.preventDefault();
        if(this.state.event.id){
            this.props.updateEvent(this.state.event);
            //go back simon
            this.props.history.goBack();
        }else{
            const newEvent={
                ...this.state.event,
                id:cuid(),
                hostPhotoURL:'/assets/user.png'
            }
            this.props.createEvent(newEvent);
            //redirect ??
            this.props.history.push('/events');
        }
    }
    onInputChange=(event)=>{
        const newEvent = this.state.event;
        newEvent[event.target.name] = event.target.value;
        this.setState({
            event:newEvent
        })
    }
    render(){
    
        const {event} = this.state;
        return(
            <div className="card   card-form ">
            <div className="card-body">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Event Title</label>
                        <input name="title" onChange={this.onInputChange}  value={event.title} type="text" className="form-control form-control-lg" placeholder="Event Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Event Date</label>
                        <input name="date" onChange={this.onInputChange}  value={event.date}  type="date" className="form-control form-control-lg" placeholder="Event Date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input name="city" onChange={this.onInputChange}  value={event.city}  type="text" className="form-control form-control-lg" placeholder="City event is taking place"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="venue">Venue</label>
                        <input name="venue" type="text" onChange={this.onInputChange}  value={event.venue}  className="form-control form-control-lg" placeholder="Venue of the event"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hosting">Hosted By</label>
                        <input name="hostedBy" type="text" onChange={this.onInputChange}  value={event.hostedBy}  className="form-control form-control-lg" placeholder="Enter who is hosting event"/>
                    </div>
                    <input type="submit" className="btn btn-success mb-3"/>
                </form>
                    <button onClick={this.props.history.goBack}className="btn btn-default " >Cancel</button>
            </div>
        </div>
        )
    }
}
export default connect(mapStateToProps,actions)(EventForm);
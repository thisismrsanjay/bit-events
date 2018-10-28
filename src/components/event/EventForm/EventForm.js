import React ,{Component} from 'react';


const emptyEvent ={
            title:'',
            date:'',
            city:'',
            venue:'',
            hostedBy:'',
            attendees:[]
        
    }
class EventForm extends Component {
    
    state={
        event:emptyEvent
    }

    componentDidMount(){
         if(this.props.selectedEvent != null){
             this.setState({
                 event:this.props.selectedEvent
             })
         }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedEvent !== this.props.selectedEvent){
            this.setState({
                event:nextProps.selectedEvent|| emptyEvent
            })
        }
    }

    onFormSubmit= (event)=>{
        event.preventDefault();
        if(this.state.event.id){
            this.props.updateEvent(this.state.event);
        }else{
            this.props.createEvent(this.state.event);
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
        const {handleCancel} = this.props;
        const {event} = this.state;
        return(
            <div className="card   card-form mt-3">
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
                    <button onClick={handleCancel}className="btn btn-default " >Cancel</button>
            </div>
        </div>
        )
    }
}
export default EventForm;
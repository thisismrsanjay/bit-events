import React, { Component } from 'react';
import EventDashboard from './components/event/EventDashboard/EventDashboard'
import EventDetailedPage from './components/event/EventDetailed/EventDetailedPage'
import PeopleDashboard from './components/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from './components/user/UserDetailed/UserDetailedPage'
import SettingsDashboard from './components/user/Settings/SettingsDashboard'
import HomePage from './components/home/HomePage'
import EventForm from './components/event/EventForm/EventForm'
import NavBar from './components/nav/NavBar/NavBar';
import {Route,Switch,Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App"  >

          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>

          <Route path="/(.+)" render={()=>(
             
             <div>
            <NavBar/>
            <Switch>
               <Redirect exact from='/settings' to='/settings/basic'/>
              <Route path="/events" component={EventDashboard} />
              <Route path="/event/:id" component={EventDetailedPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createEvent" component={EventForm} />
              {/* <Route path="*" component ={NotFound} /> */}
            </Switch>
          </div>
          
          )} 
          />

         
          
          
          


      </div>
    );
  }
}

export default App;

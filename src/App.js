import React, { Component } from 'react';
import EventDashboard from './components/event/EventDashboard/EventDashboard'
import NavBar from './components/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App"  >
          <NavBar/>
          <EventDashboard/>

      </div>
    );
  }
}

export default App;

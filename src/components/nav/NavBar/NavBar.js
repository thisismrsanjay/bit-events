import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="">
              <img
                src="assets/logo.png"
                width="30"
                height="30"
                alt=""
              />
                
            </a>
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="">Bit-Events </a>
            </div>
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="">Events </a>
            </div>
            <button type="button" className="btn btn-outline-success">Create Event</button>
            <div className="collapse navbar-collapse" id="navbar-collapse">
            
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  
                  <button className="btn btn-outline-primary nav-link" type="submit">Login</button>
                </li>
                <li className="nav-item ">
                  
                  <button className="btn btn-outline-primary nav-link ml-2" type="submit">SignOut</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

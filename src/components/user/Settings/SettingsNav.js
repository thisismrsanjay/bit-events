import React from "react";
import {NavLink} from 'react-router-dom';

const SettingsNav = () => {
  return (
    <div>
      <div className="card ">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <a  className="list-group-item">
              <h2>Profile</h2>
            </a>
            <NavLink to="/settings/basic" activeClassName="active" className="list-group-item">
              <p>Basics</p>
            </NavLink>
            <NavLink to="/settings/about" activeClassName="active" className="list-group-item">
              <p>About Me</p>
            </NavLink>
            <NavLink to="/settings/photos" activeClassName="active" className="list-group-item">
              <p>My Photos</p>
            </NavLink>
            </ul>
        </div>
      </div>
            <div className="card ">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <a  className="list-group-item">
              <h2>Account</h2>
            </a>
            <NavLink to="/settings/account" activeClassName="active" className="list-group-item">
              <p>My Account</p>
            </NavLink>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsNav;

import React from "react";
const SettingsNav = () => {
  return (
    <div>
      <div className="card" styles={"width: 18px"}>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>

      <h1>Card</h1>
      <h2>Profile</h2>
      <h3>Basics</h3>
      <h3>About Me</h3>
      <h3>My Photos</h3>

      <h2>Account</h2>
      <h3>My Account</h3>
    </div>
  );
};

export default SettingsNav;

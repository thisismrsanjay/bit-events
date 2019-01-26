import React from 'react'
import {Link} from 'react-router-dom';

export default function SignedInMenu({signOut}) {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link navbar-brand dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="/assets/user.png" width="30" height="30" alt=""/> UserName
        </a>
        <div className="dropdown-menu" >
          <a className="dropdown-item"><span role="img" aria-label="">➕</span> Create Event</a>
          <a className="dropdown-item"><span role="img" aria-label="">📅</span> My Events</a>
          <a className="dropdown-item"><span role="img" aria-label=""> 👨‍👧‍👧</span>  My Network</a>
          <a className="dropdown-item"><span role="img" aria-label="">👨‍💼</span> My Profile</a>
          <div className="dropdown-divider"></div>
          <Link to='/settings' className="dropdown-item" >Settings</Link>
          <a className="dropdown-item" onClick={signOut} >Sign Out</a>
        </div>
      </li>
  )
}

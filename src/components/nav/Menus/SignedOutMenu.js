import React from 'react'

export default function SignedOutMenu({signIn}) {
  return (
    <ul className="navbar-nav ml-auto">
   <li className="nav-item">        
        <button className="btn btn-outline-primary nav-link" onClick={signIn} type="submit">Login</button>
    </li>
    <li className="nav-item ">          
        <button className="btn btn-outline-primary nav-link ml-2" type="submit">Register</button>
    </li>
    
  </ul>
    
  )
}

import React from 'react'

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
<nav className="navbar navbar-expand-lg bg-transparent d-flex">
 <div className="navbar-header">
        <Link className="navbar-brand" to="/">Tourism</Link>
      </div>
      <nav className="justify-content-end">
    <ul className="navbar-nav  navbar-right justify-content-end">
      <li className="nav-item">

        <Link to="/login" className="nav-link">Blogs</Link>
      </li>
      <li className="nav-item">

        <Link to="/Places" className="nav-link">Places</Link>
      </li>
      <li className="nav-item">
      
        <Link to="/login" className="nav-link">Services</Link>
      </li>
      <li className="nav-item">
       
        <Link to="/Contact" className="nav-link">Contact us</Link>
      </li>
      
     
    </ul>
    </nav>
   

  </nav>



        </div>
    )
}

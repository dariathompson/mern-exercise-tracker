import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <div className="container">
          <Link to="/" className="navbar-brand">Exercise Tracker</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Exercices</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Exercise Log</Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar;
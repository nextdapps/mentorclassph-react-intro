import React from 'react';
import './Nav.css';

/**
 * STATELESS
 */

function Nav({ user, children }) {
  return (
    <div className="nav">
      <span>Intro to React</span>
      <a href="#">Login</a>
      <a href="#">Register</a>
      <span>{user.firstname} {user.lastname}</span>
      <div>{children}</div>
    </div>
  )
}

export default Nav;

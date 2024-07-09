import { useState } from 'react';
import './header.css';

function Navbar() {
  return (
    <div className="header">
      <div className="title">
        <h1>Familly Wellness </h1>
        <p>MASSAGE THERAPY</p>
      </div>
     <div className="nav">
      <div className="tab">Home</div>
        <div className="tab">About</div>
        <div className="tab">Services</div>
        <div className="tab">FAQ</div>
        <div className="tab">Contact</div>
     </div>
    </div>
  );
}

export default Navbar;

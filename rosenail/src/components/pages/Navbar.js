import React from 'react';
import {link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
    return(
        <div>
          <div className="navbar">
            <div className="navbar-container container">
                <link to='/' className="navbar-logo">
                    RoseNail
                </link>
                <div className="menue-icon"></div>
            </div>
          </div>
        </div>
    )
}
export default Navbar
import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
             <Link to="/">
            <div className="header__logo">
                    <h2><b>PropKing</b></h2>
            </div>
            </Link>

            <div className="header__nav">
                
                    <div className="header__options">
                    <Link to="/"> <span>Home</span>  </Link>
                    </div>
              
                    <div className="header__options">
                    <Link to="/"><span>Property</span>    </Link>
                    </div>
     
                
                    <div className="header__options">
                    <Link to="/signup"> <span>SignUp</span>  </Link>
                    </div>

            </div>
        </div>
    )
}

export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nabvar.css";

const Nabvar = () => {
    return (
        <div className="nablink">

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/friends">Country</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
        </div>
    );
};

export default Nabvar;
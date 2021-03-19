import React from 'react';
import {NavLink}  from "react-router-dom"
function NavBar(props) {
    return (
        <div>
            <NavLink to="/about">
            About
            </NavLink>
             <NavLink to="/tests">
               All Tests
            </NavLink>
             <NavLink to="/createtest">
               Create Test
            </NavLink>
        </div>
    );
}

export default NavBar;
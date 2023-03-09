import React from 'react';
import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <>
        <div className='menu'>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink exact activeClassName="active" to="/about">About Us</NavLink>
            <NavLink exact activeClassName="active" to="/contact">Contact Us</NavLink>
            </div>
        </>
    )
}

export default NavBar;
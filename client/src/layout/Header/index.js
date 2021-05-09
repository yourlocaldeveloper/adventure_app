import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav role="navigation">
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/about" activeClassName="current">About</NavLink>
        </nav>
    );
}

export default Header;

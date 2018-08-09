import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import SignUpClient from '../SignUpClient';
import './styles.css'

class Header extends React.Component {
    render() {
        return (
            <nav className="header navbar navbar-light">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/signIn">Sign In</NavLink>
                <NavLink className="nav-link" to="/signUp">Sign Up</NavLink>
            
                
              </nav>
        )
    }
}

export default Header;
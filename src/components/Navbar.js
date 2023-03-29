import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h1>USER DATA</h1>
            <ul>
                <Link to="/home">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar
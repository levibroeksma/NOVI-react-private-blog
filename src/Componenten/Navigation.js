import {NavLink} from "react-router-dom";
import React from "react";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/blog/:id">Blog post</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation
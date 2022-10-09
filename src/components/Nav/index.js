import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

    return (

        <header>
        <h1><NavLink to="/">Caid's Portfolio</NavLink></h1>
        <div className="nav">
            <ul>
                <li><NavLink to="/">About Me</NavLink></li>
                <li><NavLink to="/projects">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </header>
    

    )

}

export default Nav;
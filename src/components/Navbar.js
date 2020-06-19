/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="nav-wrapper brown lighten-2">
            <div className="container">
                <a href="" className="brand-logo">Firus's cheatsheets</a>
                <ul className="right">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/python">Python</Link></li>
                    <li><Link to="/react">React</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
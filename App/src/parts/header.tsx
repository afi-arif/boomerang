import React, { FC } from "react";
import { Link } from "react-router-dom";


const Header: FC = () => {
    return (
        <header>
            <div className="boomerang-site-logo">
                <a href="https://boomarang.co.uk">Home page</a>
                <span>TANTUM PROJECTS</span>
            </div>
            <nav className="boomerang-hand-holds">
                <a className="menu" href="#">menu</a>
            </nav>
            <nav className="boomerang-desk-holds">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">About us   </Link></li>
                    <li><Link to="/home">What we do   </Link></li>
                    <li><Link to="/home">Projects   </Link></li>
                    <li><Link to="/home">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
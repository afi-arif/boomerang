import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./../styles/header.scss";

const Header: FC = () => {
    return (
        <header>
            <div className="boomerang-site-logo">
                <a href="https://boomarang.co.uk">Home page</a>
                <span>TANTUM PROJECTS</span>
            </div>
            <nav className="boomerang-hand-holds">
                <div className="menu-backscreen">
                    <a className="menu" href="#">menu</a>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/home">About us   </Link></li>
                        <li><Link to="/home">What we do   </Link></li>
                        <li><Link to="/projects">Projects   </Link></li>
                        <li><Link to="/home">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <nav className="boomerang-desk-holds">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">About us   </Link></li>
                    <li><Link to="/home">What we do   </Link></li>
                    <li><Link to="/projects">Projects   </Link></li>
                    <li><Link to="/home">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header>
            <div className="boomerang-site-logo">
                <a href="https://boomarang.co.uk">Home page</a>
                <span>TANTUM PROJECTS</span>
            </div>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import React, { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "./../assets/images/logo.svg";

const Header: FC = () => {
    return (
        <header>
            <div className="boomerang-site-logo">
                <a href="https://boomarang.co.uk">Home page</a>
                <span>TANTUM PROJECTS</span>
            </div>
            <nav>
                <ul>
                    <li><Link to="/home">Home <img src={Logo} /></Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
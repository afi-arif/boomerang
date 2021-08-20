import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header>
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
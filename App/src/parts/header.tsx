import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/header.scss";

const Header: FC = () => {

    const [show, setShow] = useState(false);

    const ShuffleView = () => {
        setShow(!show);
    }

    const CloseView = () => {
        if (!show) return;
        setShow(false);
    }

    return (
        <header>
            <div className="boomerang-site-logo">
                <a href="https://boomarang.co.uk">Home page</a>
                <span>TANTUM PROJECTS</span>
            </div>
            <nav className={"boomerang-hand-holds" + (show ? ' active' : '')} >
                <div className="menu-backscreen" onClick={CloseView}>
                    <div className="navi-holder">
                        <a className="menu" onClick={ShuffleView}>menu</a>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about-us">About us   </Link></li>
                            <li><Link to="/what-we-do">What we do   </Link></li>
                            <li><Link to="/projects">Projects   </Link></li>
                            <li><Link to="/home">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="boomerang-desk-holds">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about-us">About us   </Link></li>
                    <li><Link to="/what-we-do">What we do   </Link></li>
                    <li><Link to="/projects">Projects   </Link></li>
                    <li><Link to="/home">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
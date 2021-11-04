import React, { FC } from "react";
import "./contact.scss";

import smallboomerangLogo from "./../../assets/images/boomerang-logo-contacct.svg";
import mediumboomerangLogo from "./../../assets/images/boomerang-logo-contacct.svg";
import largeboomerangLogo from "./../../assets/images/boomerang-logo-contacct.svg";

const Contact: FC = () => {
    return (
        <main className="boomerang-contact">
            <div className="boomerang-contact-flash"></div>
            <div className="boomerang-contact-us">
                <h1>Contact Us</h1>
                <p>if  you would like to one of our management contact  your, please fill in the form below and we will be happy to arrange a meeting or site visit </p>
            </div>
            <div className="boomerang-contact-form">
                <form action="">
                    <label htmlFor="name">
                        <span>Name</span>
                        <input type="text" name="name" id="name" />
                    </label>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input type="email" name="email" id="email" />
                    </label>
                    <label htmlFor="phone">
                        <span>Phone</span>
                        <input type="tel" name="phone" pattern="[0-9]" required id="phone" />
                    </label>
                    <label htmlFor="user-option">
                        <select>
                            <option>Choose an option</option>
                            <option>option-1</option>
                            <option>option-2</option>
                        </select>
                    </label>
                    <label htmlFor="message">
                        <span>Message</span>
                        <textarea name="message" id="message" ></textarea>
                    </label>
                </form>
                <div className="boomerang-address">
                    <div>
                        <img src={smallboomerangLogo} srcSet={`${smallboomerangLogo} 360w, ${mediumboomerangLogo} 768w, ${largeboomerangLogo} 1366w  `} />
                    </div>
                    <div>
                        <span><strong>Deane Property</strong></span>
                        <span>Consultants Ltd,</span>
                        <span>87 Lamberth Walk,</span>
                        <span>London, SE11 6DX,</span>
                        <span>United Kingdom</span>
                        <a className="boomerang-phone" href="tel:+44-203-6436-123">+44 (0) 203 6436 123</a>
                        <a className="boomerang-email" href="emailto:Laura@Deaneholdings.com">Laura@Deaneholdings.com</a>
                        <a className="boomerang-map" href="#">Get Direction</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;
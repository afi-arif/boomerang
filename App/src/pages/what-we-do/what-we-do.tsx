import React, { FC, ReactElement } from "react";
import "./what-we-do.scss";

import smallboomerangLogo from "./../../assets/images/small/boomerang-logo.jpg";
import mediumboomerangLogo from "./../../assets/images/medium/boomerang-logo.jpg";
import largeboomerangLogo from "./../../assets/images/large/boomerang-logo.jpg";

const WhatWeDo: FC = (): ReactElement => {
    return (
        <main className="boomerang-what-we-do">
            <div className="boomerang-flash">
                <div className="boomerang-flash-content">
                    <h1>THE BOOMERANG DIFFERENCE</h1>
                    <p>For the last decade or more, buy-to-let property has proven to be a
                        sound investment for most landlords; but it has its own unique risks
                        and potential barriers to entry too.</p>
                    <p>We’d like to take this opportunity to explain what makes Boomerang
                        Buy to Let different, and outline what we can do for you.</p>
                    <button>CONTACT</button>
                </div>
            </div>
            <div className="boomerang-how-it-works">
                <div className="boomerang-our-works">
                    <h2>How It Works</h2>
                    <p><strong>Boomerang Buy to Let’s in-depth experience of the property industry has enabled
                        us to develop a unique business model that allows our clients to benet from all of
                        the advantages of buy-to-let investment, while greatly mitigating the traditional
                        drawbacks.</strong></p>
                    <p><strong>It also means that you can leave the hard work to us, freeing up your own valuable
                        time for other things.</strong></p>
                    <p>When you become a client of Boomerang Buy to Let, you do not just invest in a property;
                        we invest in you as well, and in the long-term growth and profitability of your portfolio. This
                        latter is designed to be both low risk and low effort on your part too.</p>
                    <p>Any property you choose to invest in will be hand-picked by the Boomerang Buy to Let
                        experts to achieve hig her rental yields than traditional alternatives.</p>
                    <p>Quickly increasing your property’s value by means of renovation and improvement works
                        allows you to unlock and recover your initial financial investment in the property expeditiously
                        too, to reinvest in second and subsequent investment properties, enabling the rapid
                        and profitable expansion of your portfolio.</p>
                    <p>The majority of our offerings are semi-commercial with additional development opportunities
                        available across the rest of the property, particularly within residential sections of the
                        building. In most cases, we expand and develop such sections into far larger properties to
                        maximise their rental incomes.</p>
                    <p>The commercial part of any semi-commercial unit will almost universally generate a guaranteed,
                        long term rental income, meaning that you can avoid rental void periods and rest
                        assured that your mortgage repayments will always be covered, making the add-on level</p>
                </div>
                <div className="boomerang-our-services">
                    <h2>Our Service</h2>
                    <p>As experienced buy-to-let owners ourselves as well as professional property consultants
                        and portfolio managers, we appreciate that any landlord or prospective landlord considering
                        retaining our services will want to be clear on exactly what we can do for them.
                        With this in mind, we’ve outlined the key roles we perform for our clients below.</p>
                    <h3><span>Procurement and Acquisition</span></h3>
                    <div>details</div>
                    <h3><span>Running the Figures</span></h3>
                    <div>details</div>
                    <h3><span>Assessment of Development Potential</span></h3>
                    <div>details</div>
                    <h3><span>Purchasing &amp; Finance</span></h3>
                    <div>details</div>
                    <h3><span>Additional Services</span></h3>
                    <div>details</div>
                </div>
            </div>
            <div className="boomerang-forewords">
                <img src={smallboomerangLogo} srcSet={`${smallboomerangLogo} 360w, ${mediumboomerangLogo} 768w, ${largeboomerangLogo} 1366w  `} />
                <div>
                    <span>Boosts the asset value
                        within short period</span>
                    <span>High rental yield</span>
                    <span>Unlock your deposit</span>
                </div>
            </div>

        </main>
    );
}

export default WhatWeDo;
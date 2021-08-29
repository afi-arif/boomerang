import React, { FC } from "react";
import "./home.scss";
import videoPlaceHolder from "./../../assets/images/large/video-place-holder.jpg";
import smallboomerangLogo from "./../../assets/images/small/boomerang-logo.jpg";
import mediumboomerangLogo from "./../../assets/images/medium/boomerang-logo.jpg";
import largeboomerangLogo from "./../../assets/images/large/boomerang-logo.jpg";

import iconGraph from "./../../assets/images/small/icon-graph.png";
import iconHouse from "./../../assets/images/small/icon-house.png";
import iconInverst from "./../../assets/images/small/icon-inverst.png";

const Home: FC = () => {
    return (<main>
        <div className="boomerang-first-throw">
            <div className="boomerang-headline">
                <h1>
                    Throw Your First
                    Boomerang Today,
                    and Prepare to <br />
                    Catch the Proﬁts
                </h1>
                <div>
                    <p>Exclusive properites deals that are not
                        are notavailable through traditional means.</p>
                    <p>Unlock your deposit and get the majority
                        of your initial investment back.</p>
                </div>
            </div>
        </div>
        <div className="boomerang-buy-2let">
            <div className="boomerang-2let-info">
                <p>Investing in a buy-to-let property can be both exciting and daunting, but the end  goal is of course to be proﬁtable and to maximise the return on your investment.
                    However, when you purchase a buy-to-let property, this represents more than just a signiﬁcant ﬁnancial commitment but also potentially a large commitment of time  too; something that many people seeking to create or expand a portiolio of  investment properties are short of.</p>
                <p>Tantum offers end-to-end acquisition, development, and property management services to investors seeking to enter the buy-to-let market in the most profitable way, as well as those with an existing portiolio that they wish to expand or improve upon.</p>
                <p>We can help you to maximise your buy-to-let income and increase the value of your assets without tying up large amounts of capital for the long term, leaving you free to enjoy your profits and take care of other things.</p>

            </div>
            <div className="boomerang-2let-video">
                <img src={videoPlaceHolder} />
                <p>WATCH OUR SHORT VIDEO</p>
                <img src={smallboomerangLogo} srcSet={`${smallboomerangLogo} 360w, ${mediumboomerangLogo} 768w, ${largeboomerangLogo} 1366w  `} />
                <br />
                <br />
            </div>

        </div>
        <div className="boomerang-advantage-let">
            <h2>The Advantages of
                Buy-to-Let Investment</h2>
            <div className="boomerang-home-slide">
                <div>
                    <img src={iconGraph} />
                    <h3>Asset Boost</h3>
                    Owning a buy-to-let property can enable you to generate a regular monthly income, and benefit from an increase in the value of your asset over time too.
                </div>
                <div>
                    <img src={iconHouse} />
                    <h3>UK Property Market</h3>
                    The UK lettings market is currently very strong and has been for a long time. This is due to a combination of factors including a lack of affordable properties to purchase (both residential and commercial), and strict mortgage underwriting criteria</div>
                <div>
                    <img src={iconInverst} />
                    <h3>Safe Investment</h3>
                    Both corporations and individuals that invest in buy-to-let property know that this is a stable, comparatively straight forward approach to achieving a consistent long-term return on their investment.</div>
            </div>
        </div>
        <div className="boomerang-unique">
            <h2>What Makes Boomerang Buy to Let Unique?</h2>
            <div className="boomerang-unique-boxes">
                <div className="boomerang-unique-box box1">
                    <h3>Unlock Your Deposit</h3>
                    <p>Our approach allows for the quick release of anywhere between 50-100% of this deposit collateral after renovation and improvement works on the property have been completed and the property’s value has increased significantly, and capital appreciation is usually achieved within just 12 months or less.</p>
                </div>
                <div className="boomerang-unique-box box2">
                    <h3>Exclusive Projects</h3>
                    <p>We offer a full end-to-end service, and specialise in identifying the best development opportunities, often benefiting from advance access before public offerings, and pass these onto our clients with the goal of providing them with the greatest possible return on their investment.</p>
                </div>
                <div className="boomerang-unique-box box3">
                    <h3>Increased Rental Yields</h3>
                    <p>We can achieve up to 60% higher rental returns on your investment too, compared to the average</p>
                </div>
                <div className="boomerang-unique-box box4">
                    <h3>Portfolio Expansion</h3>
                    <p>This in turn allows our clients to reinvest their initial outlay into another property promptly, allowing for faster overall turnaround times and expedited portfolio expansion and so naturally, increased and expedited profits</p>
                </div>
                <div className="boomerang-unique-box box5">
                    <h3>Finance</h3>
                    <p>Additionally, Boomerang Buy to Let partners with a small, carefully chosen selection of well-known UK financial services providers to help to smooth the pathway for our clients when it comes to arranging financing for their buy-to-let property. Plus, we do not charge an arrangement fee for this either; representing a large saving compared to the industry standard charge of 1-1.5% of the property value.</p>
                </div>
                <div className="boomerang-unique-box box6">
                    <h3>Earning Your Trust</h3>
                    <p>Boomerang Buy to Let endeavours to develop long term working relationships with all our clients, guiding and nurturing the growth of every porftolio to develop strong, ongoing business relationships.</p>
                </div>
            </div>
        </div>
    </main>)
}

export default Home;
import React, { FC } from "react";
import "./home.scss";
import videoPlaceHolder from "./../../assets/images/large/video-place-holder.jpg";
import smallboomerangLogo from "./../../assets/images/small/boomerang-logo.jpg";
import mediumboomerangLogo from "./../../assets/images/medium/boomerang-logo.jpg";
import largeboomerangLogo from "./../../assets/images/large/boomerang-logo.jpg";

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
                <div>one</div>
                <div>two</div>
                <div>thr</div>
            </div>
        </div>
    </main>)
}

export default Home;
import React, { FC, ReactElement } from 'react';
import './about-us.scss';


const AboutUs: FC = (): ReactElement => {
    return (
        <main className="boomerang-about-us">
            <div className="boomerang-flash">
                <div className="boomerang-contact">
                    <h1>Begin Your Journey with Boomerang Buy to Let  Today</h1>
                    <form action="">
                        <label htmlFor="name"><input type="text" placeholder="name" name="name" id="name" /></label>
                        <label htmlFor="address"><input type="text" placeholder="address" name="address" id="address" /></label>
                        <label htmlFor="pincode"><input type="text" placeholder="pincode" name="pincode" id="pincode" /></label>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
            <div className="boomerang-details-about-us">
                <div className="details-block">
                    <h2>Our Purpose</h2>
                    <p>Boomerang Buy to Let was created by Tantum Property to enable investors to enter the buy-to-let market or expand their existing portfolio in the most profitable, lowest risk, and least time-consuming way possible</p>
                </div>
                <div className="details-block">
                    <h2>Why choose us</h2>

                    <p>Tantum is owned and managed by Siraj Deane, a property industry professional with over 25 years of experience with the buy-to-let niche, and a proven track record of suceess. This has enabled him to develop a large, established network of associates within the property industry and gives Tantum a leading edge when it ome to identifying the most attractive propositions for our clients.</p>

                    <p>Siraj is assisted by a hand-picked team of specialist property acquisition and lettings consultants, who between them have a weath of experience in every facet of the prchase, development, and operatin of profitable buy-to-let operations.</p>

                    <p>The team s in-depth knowledge of the buy-to-let market and broad network of industry connections ensure that Boomerange Buy to Let has already cemented its reputaton as the premier buy-to-let aquisition and management company in the UK</p>
                </div>
                <div className="details-block">
                    <h2>Our Promise</h2>

                    <p>  Put simply, we believe that our expertise and industry insights allow us to offer niche properties with high income and asset appreciation potential, whilst remaining low-risk propositions for depreciation or loss.</p>
                </div>
            </div>
            <div className="boomerang-the-team">
                <h2>Our Team</h2>
                <div className="boomerang-team">
                    <div className="boomerang-member the-md">
                        <div className="profile-info">
                            <h3>Siraj Deane</h3>
                            <span>Managing Director</span>
                        </div>
                    </div>
                    <div className="boomerang-member the-crm">
                        <div className="profile-info">
                            <h3>Tom Baxter</h3>
                            <span>Client Relationship Manager</span>
                        </div>
                    </div>
                    <div className="boomerang-member the-pm">
                        <div className="profile-info">
                            <h3>Oleg Tsarev</h3>
                            <span>Project Manager</span>
                        </div>
                    </div>
                    <div className="boomerang-member the-fc">
                        <div className="profile-info">
                            <h3>Nasser Chaudary</h3>
                            <span>Financial Controller</span>
                        </div>
                    </div>
                    <div className="boomerang-member the-mm">
                        <div className="profile-info">
                            <h3>Eugenia Kovaliova</h3>
                            <span>Marketing Manager</span>
                        </div>
                    </div>
                    <div className="boomerang-member the-oa">
                        <div className="profile-info">
                            <h3>Jennifer Beecroft</h3>
                            <span>Office Administrator</span>
                        </div>
                    </div>
                    <div className="boomerang-member the-pd">
                        <div className="profile-info">
                            <h3>Yazid Yasin</h3>
                            <span>Product Development & Compliance</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs;
import React, { FC, } from "react";
import "./barkingRoad.scss";

import SlideService from "./../../../../service/slide-service";

const BarkingRoad: FC = () => {

    const [slide, slideNo, setSlideNo] = SlideService('Barking-Road');

    const prevSlide = (event: React.MouseEvent<Element | MouseEvent>): void => {
        event.preventDefault();
        setSlideNo(slideNo - 1);

    }

    const nextSlide = (event: React.MouseEvent<Element | MouseEvent>): void => {
        event.preventDefault();
        setSlideNo(slideNo + 1);
    }

    return (
        <div className="boomerang-slider-barkingRoad">
            <div className="project-info">
                <p>Our Barking Road project was originally a five-bedroom care home that we secured with the intention of attaining planning permission for both a change of use and of format, converting the building into a selection of residential apartments.</p>
                <p>We applied for and were awarded permission to proceed with a three-storey rear extension to the property and redeveloped the newly-extended building into a total of five apartments.</p>
                <p>These range from one to three bedrooms, with one of the one-bedroom apartments being particularly large and well-appointed for the area, targeting the premium lettings market and correlating hig her rental incomes.</p>
                <p>As the site was initially zoned as a commercial premises, the deposit required from the client to secure the building was rather hig her than the norm at 30%; however, our development works have increased the rental value of the premises as a whole by an impressive 62%.</p>
                <p>After completion of the relevant works and refinancing of the project in accordance with its increased value, our client’s net contribution to the project totalled just 52,000.</p>
            </div>
            <div className="project-data">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Loan</th>
                            <th>Your Investment</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Purchase Price</td>
                            <td>451.50</td>
                            <td>261.30</td>
                            <td>712.80</td>
                        </tr>
                        <tr>
                            <td>Development Cost</td>
                            <td>-</td>
                            <td>355.30</td>
                            <td>355.30</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>451.50</td>
                            <td>616.60</td>
                            <td>1,068.10</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Property Value Post Development</td>
                            <td></td>
                            <td></td>
                            <td>1,300.00</td>
                        </tr>
                        <tr>
                            <td>Profit</td>
                            <td></td>
                            <td></td>
                            <td>231.90</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Re-finance @ 75% Post Development Value</td>
                            <td></td>
                            <td></td>
                            <td>975.00</td>
                        </tr>
                        <tr>
                            <td>Less: 1st Charge Loan</td>
                            <td></td>
                            <td></td>
                            <td>- 451.50</td>
                        </tr>
                        <tr>
                            <td>Less: Your Initial Investment</td>
                            <td></td>
                            <td></td>
                            <td>- 616.60</td>
                        </tr>
                        <tr>
                            <td>Client Contribution</td>
                            <td></td>
                            <td></td>
                            <td>93.10</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Annual Rental Income</td>
                            <td></td>
                            <td></td>
                            <td>58.20</td>
                        </tr>
                    </tbody>
                </table>
                <div className="boomerang-site-slide">
                    <div className="prev" onClick={prevSlide}><a href="#">Previous</a> </div>
                    <div>
                        <img src={slide} />
                    </div>
                    <div className="next" onClick={nextSlide}><a href="#">Next</a> </div>
                </div>
            </div>

        </div>
    )
}

export default BarkingRoad;
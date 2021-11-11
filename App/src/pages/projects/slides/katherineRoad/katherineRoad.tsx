import React, { FC } from "react";
import "./katherineRoad.scss";
import SlideService from "./../../../../service/slide-service";

const KatherineRoad: FC = () => {

    const [slide, slideNo, setSlideNo] = SlideService('Katherine-Road');


    const prevSlide = (event: React.MouseEvent<Element | MouseEvent>): void => {
        event.preventDefault();
        setSlideNo(slideNo - 1);

    }

    const nextSlide = (event: React.MouseEvent<Element | MouseEvent>): void => {
        event.preventDefault();
        setSlideNo(slideNo + 1);
    }


    return (

        <div className="boomerang-slider-katherineRoad">
            <div className="project-info">
                <p>This Katherine Road property represented something of a departure from the norm for us, as our client commissioned us to secure an investment property on this specific street, which at first seemed like something of a tall order!</p>
                <p>Originally consisting of a ground floor office and small first floor flat in an end-of-terrace property, we redeveloped the first floor and attic into a large, modern two-storey apartment as well as undertaking improvement works on the commercial premises below.</p>
                <p>The commercial premises is now occupied under the terms of a 20-year lease, proving a secure, guaranteed rental income for its landlord, and the residential apartment is rented out under the terms of an shorthold tenancy.</p>
                <p>We completed the development works on time and within budget, and as well as offering two streams of rental income, our work also increased the value of the asset itself. This resulted in a significant proportion of the client’s initial investment being returned to them far faster than is possible for traditional buy-to-let operations.</p>
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
                            <td>315.00</td>
                            <td>148.50</td>
                            <td>463.50</td>
                        </tr>
                        <tr>
                            <td>Development Cost</td>
                            <td>-</td>
                            <td>109.00</td>
                            <td>109.00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>315.00</td>
                            <td>257.50</td>
                            <td>572.50</td>
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
                            <td>650.00</td>
                        </tr>
                        <tr>
                            <td>Profit</td>
                            <td></td>
                            <td></td>
                            <td>77.50</td>
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
                            <td>Re-finace @ 75% Post Development Value</td>
                            <td></td>
                            <td></td>
                            <td>487.50</td>
                        </tr>
                        <tr>
                            <td>Less: 1st Charge Loan</td>
                            <td></td>
                            <td></td>
                            <td>- 315.00</td>
                        </tr>
                        <tr>
                            <td>Less: Your Initial Investment</td>
                            <td></td>
                            <td></td>
                            <td>- 257.50</td>
                        </tr>
                        <tr>
                            <td>Client Contribution</td>
                            <td></td>
                            <td></td>
                            <td>-85.00</td>
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
                            <td>37.20</td>
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

export default KatherineRoad;
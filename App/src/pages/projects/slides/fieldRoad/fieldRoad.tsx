import React, { FC } from "react";
import "./fieldRoad.scss";

const FieldRoad: FC = () => {
    return (
        <div className="boomerang-slider-fieldRoad">
            <div className="project-info">
                <p>Purchased as a semi-commercial unit consisting of two shops and a one bedroom flat, we undertook a significant amount of due diligence prior to purchase to ensure we would be able to attain planning permission for an additional apartment within this Field Road property.</p>
                <p>However, our first planning application in November 2018 was refused; but thanks to the significant amount of background work we’d performed prior to purchase, we resubmitted our application with a number of minor amendments, going all the way throug h to appeal at which planning permission was ultimately granted.</p>
                <p>While it took us rather longer than projected to undertake redevelopment of the property as a result of the planning delays, we were confident in the research we’d conducted prior to purchase and so, stuck with it.</p>
                <p>This ultimately more than paid off for our client, who saw the value of their property increase by 60% upon completion of development works!</p>
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
                            <td>350.00</td>
                            <td>215.00</td>
                            <td>565.00</td>
                        </tr>
                        <tr>
                            <td>Development Cost</td>
                            <td>-</td>
                            <td>136.50</td>
                            <td>136.50</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>350.50</td>
                            <td>351.50</td>
                            <td>701.50</td>
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
                            <td>800.00</td>
                        </tr>
                        <tr>
                            <td>Profit</td>
                            <td></td>
                            <td></td>
                            <td>98.50</td>
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
                            <td>600.00</td>
                        </tr>
                        <tr>
                            <td>Less: 1st Charge Loan</td>
                            <td></td>
                            <td></td>
                            <td>- 350.00</td>
                        </tr>
                        <tr>
                            <td>Less: Your Initial Investment</td>
                            <td></td>
                            <td></td>
                            <td>- 351.50</td>
                        </tr>
                        <tr>
                            <td>Client Contribution</td>
                            <td></td>
                            <td></td>
                            <td>-101.50</td>
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
                            <td>44.40</td>
                        </tr>
                    </tbody>
                </table>
                <div className="boomerang-site-slide">

                </div>
            </div>

        </div>
    )
}

export default FieldRoad;
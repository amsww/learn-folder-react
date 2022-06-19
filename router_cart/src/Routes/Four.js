import React from "react";
import './../App.css';
import {Link} from "react-router-dom";

function Four({imgSrc}){

    return(
        <div className="main_route">
    <div className="subTwo">
        <h3>More Details</h3>
        <table>
            <tr>
                <td>Product:</td>
                <td>Fan</td>
            </tr>
            <tr>
                <td>company:</td>
                <td>Hawells</td>
            </tr>
            <tr>
                <td>Price:</td>
                <td>Rs. 2,000 /-</td>
            </tr>
            <tr>
                <td>Discount:</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Warranty:</td>
                <td>12 Months</td>
            </tr>
            <tr>
                <td>Made in:</td>
                <td>India</td>
            </tr>
        </table>
        <h3><Link to={"/"}>Close</Link></h3>
    </div>
    <div className="sub_router">
        <img src={imgSrc}/>
    </div>
    </div>
    )
}

export default Four;
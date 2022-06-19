import React from "react";
import './../App.css';
import {Link} from "react-router-dom";


function Five({imgSrc}){

    return(
        <div className="main_route">
    <div className="subTwo">
        <h3>More Details</h3>
        <table>
            <tr>
                <td>Product:</td>
                <td>Dishwash</td>
            </tr>
            <tr>
                <td>company:</td>
                <td>Prill</td>
            </tr>
            <tr>
                <td>Price:</td>
                <td>Rs. 50 /-</td>
            </tr>
            <tr>
                <td>Discount:</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Warranty:</td>
                <td>24 Months</td>
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

export default Five;
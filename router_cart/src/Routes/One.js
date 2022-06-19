import React from "react";
import './../App.css';
import {Link} from "react-router-dom";

function One({imgSrc}){

    return(<div className="main_route">
    <div className="subTwo">
        <h3>More Details</h3>
        <table>
            <tr>
                <td>Product:</td>
                <td>Bag</td>
            </tr>
            <tr>
                <td>company:</td>
                <td>Puma</td>
            </tr>
            <tr>
                <td>Price:</td>
                <td>Rs. 899 /-</td>
            </tr>
            <tr>
                <td>Discount:</td>
                <td>25%</td>
            </tr>
            <tr>
                <td>Warranty:</td>
                <td>12 Months</td>
            </tr>
            <tr>
                <td>Made in:</td>
                <td>China</td>
            </tr>
        </table>
        <h3><Link to={"/"}>Close</Link></h3>
    </div>
    <div className="sub_router">
        <img src={imgSrc}/>
    </div>
    </div>)
}

export default One;
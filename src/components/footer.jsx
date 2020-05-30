import React, { Component } from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor:"white", marginTop:"40px", height:"40px"}} className="text-center">
                {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> EDITH CARS LLC. </a>
            </div>
        );
    }
}

export default Footer;

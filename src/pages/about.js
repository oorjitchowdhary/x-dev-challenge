import { Button } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
        <div>
            <h1>About Page</h1>
            <Link to='/'><Button variant='contained'>Home</Button></Link>
        </div>
        );
    };
}

export default AboutPage;
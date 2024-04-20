import { Button } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class IndexPage extends Component {
    render() {
        return (
        <div>
            <h1>Home Page</h1>
            <Link to="/about"><Button variant="contained">About</Button></Link>
        </div>
        );
    }
}

export default IndexPage;

import { ArrowDropDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import React, { Component } from "react";

class TrendsPage extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary
                          expandIcon={<ArrowDropDown />}
                          aria-controls="trends-content"
                          id="trends-header"
                        >
                            <Typography variant="h4" style={{ fontWeight: "bold" }}>Trends</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6">Trends will be displayed here</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        );
    }
};

export default TrendsPage;
import { ArrowDropDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import React from "react";
import { useTrends } from "../contexts/trendsContext";

const TrendsPage = () => {
    return (
        <Grid container spacing={2}>
            {console.log(useTrends().data)}
            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary
                      expandIcon={<ArrowDropDown />}
                      aria-controls="trends-content"
                      id="trends-header"
                    >
                        <Typography variant="h4" style={{ fontWeight: "bold" }}>📊 Trends</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">Trends will be displayed here</Typography>
                        {/* {useTrends().data.map((trend) => {
                            return (
                                <div key={trend.tweet_count}>
                                    <Typography variant="h6">{trend.trend_name}</Typography>
                                    <Typography variant="body1">{trend.tweet_count} tweets</Typography>
                                </div>
                            );
                        })} */}
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}

export default TrendsPage;
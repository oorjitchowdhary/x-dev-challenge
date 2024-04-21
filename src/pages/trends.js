import { ArrowDropDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import React from "react";
import { useTrends } from "../contexts/trendsContext";

const TrendsPage = () => {
    const { data, city, fetchSentiments } = useTrends();
    const handleClick = (event) => {
        const trend = event.target.textContent;
        fetchSentiments(trend);
    }

    return (
        <Grid container spacing={2}>
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
                        <div style={{ backgroundImage: `url(https://i.pinimg.com/736x/9f/57/bd/9f57bd45d33eb906fdb3d7ffe22e2058.jpg)`, backgroundSize: "cover", backgroundPosition: "center", width: "100%" }}>
                            <Typography variant="h5" style={{ textAlign: "center", padding: "1rem", fontWeight: 'bold' }}>Top 10 trends in {city}</Typography>
                        {data ? data.slice(0, 10).map((trend) => {
                            return (
                                <div key={trend.tweet_count} style={{ width: '20%', margin: 'auto' }}>
                                    <Typography onClick={handleClick} variant="h6">{trend.trend_name}</Typography>
                                    <Typography variant="body1">{trend.tweet_count ? trend.tweet_count : "Few"} tweets</Typography>
                                </div>
                            );
                        }) : <Typography variant="h6">Loading...</Typography>}
                        </div>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}

export default TrendsPage;
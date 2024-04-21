import { ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTrends } from '../contexts/trendsContext';

const SentimentsPage = () => {
    const { trend, info } = useTrends();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDown />}
                        aria-controls='sentiments-content'
                        id='sentiments-header'
                    >
                        <Typography variant='h4' style={{ fontWeight: 'bold' }}>🫣 Sentiments</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='h5' style={{ textAlign: 'center', padding: '1rem', fontWeight: 'bold' }}>Top 3 sentiments for {trend}</Typography>
                        <Grid container spacing={2}>
                        {info ? info.slice(0, 3).map((sentiment) => {
                            return (
                                <Grid item xs={4} key={sentiment.quality}>
                                    <Typography variant='h6'>{sentiment.quality}</Typography>
                                    <Typography variant='body1'>{sentiment.summary}</Typography>
                                </Grid>
                            );
                        }) : <Typography variant='h6'>Loading...</Typography>}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}

export default SentimentsPage;
import { ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React, { Component } from 'react';

class SentimentsPage extends Component {
    render() {
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
                            <Typography variant='h6'>Sentiments will be displayed here</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        );
    };
};

export default SentimentsPage;
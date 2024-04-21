import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Map from '../components/map';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

class SearchPage extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                          expandIcon={<ArrowDropDown />}
                          aria-controls='search-content'
                          id='search-header'
                        >
                            <Typography variant='h4' style={{ fontWeight: 'bold' }}>👀 Search</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SearchBar />
                            <Typography align='center' variant='h6' style={{ fontWeight: 'bold' }}>or</Typography>
                            <Map />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        );
    };
};

export default SearchPage;
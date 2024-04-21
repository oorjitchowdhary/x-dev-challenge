import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Map from '../components/map';

class SearchPage extends Component {
    render() {
        return (
            <div className='search-page'>
                <SearchBar />
                <br/>
                <Map />
            </div>
        );
    };
};

export default SearchPage;
import '../App.css';
import React, { useEffect, useState } from "react";
import Filter from './AirlineList/filter';
import Airlines from './AirlineList/airlines';
import fetchJsonp from 'fetch-jsonp';

const Home = () => {
    const api = 'https://kayak.com/h/mobileapis/directory/airlines/homework?callback=jsonp';
    const [ airlines , setAirlines ] = useState([]);
    const [ filteredAirlines, setFilteredAirlines ] = useState([]);
    
    const getAirlines = async ()  => {
        const dataStream = await fetchJsonp(api,  { jsonpCallback: 'jsonp' });
        const airlines = await dataStream.json();
        setAirlines(airlines);
    };

    const fliterByAlliences = (selectedAlliences) => {
        const filteredList = airlines.filter(airline => {
            return selectedAlliences.includes(airline.alliance);
        })  
        setFilteredAirlines(filteredList);
    };

    useEffect(() => {
        getAirlines();
    }, []);
    
    return (
        <div className='home-container'>
            <h1 className='airline-header'>Airlines</h1>
            <Filter fliterByAlliences={fliterByAlliences}></Filter>
            <Airlines airlineList={filteredAirlines.length > 0 ? filteredAirlines : airlines }></Airlines>
        </div>
    );
}

export default Home;
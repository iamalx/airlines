import Filter from './AirlineList/filter';
import Airlines from './AirlineList/airlines';
import '../App.css';
import React, { useEffect, useState } from "react";
import useJSONP from 'use-jsonp';

const Home = () => {
    
    const [ airlines , setAirlines ] = useState([])

    const api = 'https://kayak.com/h/mobileapis/directory/airlines/homework?callback=jsonp';
    
    const getAirlines =  (data)  => {
        console.log(data)
        return data
    };

    const sendJsonP =  useJSONP({
        url: api,
        callback: data => setAirlines(data),
        callbackParam: "jsonp",
    })


    useEffect(() => {
        sendJsonP();
    }, []);

    return (
        <div className='home-container'>
            <h1 className='airline-header'>Airlines</h1>
            <Filter></Filter>
            <Airlines airlineList={airlines}></Airlines>
        </div>
    );
}

export default Home;
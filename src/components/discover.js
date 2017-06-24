import React, {Component} from 'react';
//import Card from './card';
import Mask from './maskImg';
import ItineraryList from '../containers/itinerary_list';
import ItineraryDetails from '../containers/itinerary_detail';
import Footer from './footer';

export default ()=>{
    return(
        <div className="container">
            <h1>Find Itinerary Page</h1>
            <Mask />
            <ItineraryList/>
            <ItineraryDetails/>
            <Footer />
        </div>
    )
}

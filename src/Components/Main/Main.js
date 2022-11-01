import React from 'react';
import Benefits from "./Components/Benefits";
import Works from "./Components/Works";
import SocialReview from "./Components/SocialReview";
import Details from "./Components/Details";
import Extra from "./Components/Extra";
import Partners from "./Components/Partners";
import Serving from "./Components/Serving";


const Main = ({userData}) => {
    return (
        <div className={'main-container'}>
            <Benefits/>
            <Works userData={userData}/>
            <SocialReview userData={userData}/>
            <Details/>
            <Extra/>
            <Partners/>
            <Serving userData={userData}/>
        </div>
    );
};

export default Main;
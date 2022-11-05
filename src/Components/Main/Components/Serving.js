import React from 'react';
import '../../../assets/styles/Serving.css';
import roofWorkingImage from '../../../assets/image/roof_working.png';
import Maps from "../../GoogleMap/Maps";

const Serving = ({userData}) => {
    return (
        <div className={'serving'}>
            <div className={'serving-title'}>
                <h3>{userData.servingTitle}</h3>
                <p>{userData.servingDescription}</p>
            </div>
            <div className={'serving-images'}>
                 <img className={'roof-working-image'} src={roofWorkingImage} alt={'roof-working'}/>
                <div className={'map-region-image'}>
                    <Maps userData={userData}/>
                </div>
            </div>
        </div>
    );
};

export default Serving;
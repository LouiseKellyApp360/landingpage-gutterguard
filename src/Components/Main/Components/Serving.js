import React from 'react';
import '../../../assets/styles/Serving.css';
import roofWorkingImage from '../../../assets/image/roof_working.png';
import Maps from "../../GoogleMap/Maps";

const Serving = ({userData}) => {
    return (
        <div className={'serving'}>
            <div className={'serving-title'}>
                <h3>Serving the Mid North Coast</h3>
                <p>Our team have delivered hundreds of gutter replacement and gutter guard work in the Coffs Harbour
                    and Mid North Coast region</p>
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
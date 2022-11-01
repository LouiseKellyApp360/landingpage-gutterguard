import React from 'react';
import '../../../assets/styles/Partners.css';
import blueScopeImage from '../../../assets/image/BlueScope.png';
import colorBondImage from '../../../assets/image/Colorbond.png';
import csiroImage from '../../../assets/image/CSIRO.png';
import akzoNobelImage from '../../../assets/image/AkzoNobel.png';
import gutterguardsAustraliaImage from '../../../assets/image/Gutterguards-Australia.png';

const Partners = () => {
    return (
        <div className={'partner'}>
            <h3>Our trusted partners</h3>
            <div className={'partner-item'}>
                <img src={blueScopeImage} alt={'blue-scope'}/>
                <img src={colorBondImage} alt={'color-bond'}/>
                <img src={csiroImage} alt={'csiro'}/>
                <img src={akzoNobelImage} alt={'akzo-nobel-bond'}/>
                <img src={gutterguardsAustraliaImage} alt={'gutterguard-australia-bond'}/>
            </div>
        </div>
    );
};

export default Partners;
import React from 'react';
import '../../../assets/styles/Extra.css';
import extraImage from '../../../assets/image/image2.png';

const Extra = () => {
    return (
        <div className={'extra'}>
            <h3>Local certified gutter professionals you can trust, backed by Australia’s most trusted brands.</h3>
            <img src={extraImage} alt={'image2'}/>
        </div>
    );
};

export default Extra;
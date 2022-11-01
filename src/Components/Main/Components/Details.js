import React from 'react';
import '../../../assets/styles/Details.css';
import gutterReplacement from '../../../assets/image/gutter_replacement.png';
import birdProtect from '../../../assets/image/bird_protect.png';
import fireProtect from '../../../assets/image/fire_protect.png';

const Details = () => {
    return (
        <div className={'details'}>
            <div className="card">
                <img src={gutterReplacement} alt={'gutter-Replacement'}/>
                <div className="card-body">
                    <h3 className="card-title">Gutter replacement</h3>
                    <p className="card-text">Gutters need to be strong enough to withstand extreme weather. Gutter
                        replacement and repairs will
                        protect your home. Ask us for a risk assessment.</p>
                </div>
            </div>
            <div className="card">
                <img src={birdProtect} alt={'bird-protect'}/>
                <div className="card-body">
                    <h3 className="card-title">Bird Protect</h3>
                    <p className="card-text">When gutters fill with leaves, they become a major fire risk. Embers from
                        bushfires can carry up to
                        15 kilometres, setting your home alight. Ask us how we can protect your home from embers.</p>
                </div>
            </div>
            <div className="card">
                <img src={fireProtect} alt={'fire-protect'}/>
                <div className="card-body">
                    <h3 className="card-title">Fire Protect</h3>
                    <p className="card-text">Gutter guards protect homes from unwelcome pests and birds who make your
                        roof your home.Ask us how we can protect your roof..</p>
                </div>
            </div>
        </div>
    )
        ;
};

export default Details;
import React, {useContext, useState} from 'react';
import '../../assets/styles/SearchLocation.css';
import Modal from "react-modal";
import {UserLocationContext} from "../../context/UserLocationContext";

const SearchLocation = ({cities, logo}) => {
    const [isOpenSearchLocation, setIsOpenSearchLocation] = useState(false);
    const [aState, setAState] = useState('');
    const [stateIndex, setStateIndex] = useState(0);
    const [city, setCity] = useState('');
    const {updateCorrectRegion} = useContext(UserLocationContext);

    const searchLocation = () => {
        localStorage.removeItem('correctRegion');
        setIsOpenSearchLocation(true);
        setAState('');
        setCity('');
    }

    const closeModal = () => {
        setIsOpenSearchLocation(false);
    }

    const customStyles = {
        content: {
            height: '70%',
            overflow: 'scroll',
            overflowY: 'hidden',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div className={'search-location'}>
            <h3>Gutterguard Australia</h3>
            <button onClick={searchLocation}>Search Locations</button>
            <Modal isOpen={isOpenSearchLocation} onRequestClose={closeModal} style={customStyles}>
                <div className={'search-location-modal'}>
                    <div className={'search-location-modal-navigation'}>
                        <img src={logo} alt={'logo'}/>
                        <button type="button" onClick={closeModal} className="btn-close"
                                aria-label="Close"></button>
                    </div>
                    <div className={'search-location-modal-body'}>
                        <ul>
                            {!aState && cities.map((state, index) => {
                                return <li key={state} onClick={() => {
                                    setAState(state[0]);
                                    setStateIndex(index);
                                    localStorage.setItem('correctState', state[0]);
                                    localStorage.setItem('correctRegion', state[1]);
                                    updateCorrectRegion(state[1]);
                                }}>{state[0]}</li>
                            })}
                            {aState && !city && cities[stateIndex].map((city, index) => {
                                return <li key={city} onClick={() => {
                                    setCity(city);
                                    localStorage.setItem('correctCity', city);
                                    closeModal();
                                }}>{index > 0 && city}</li>
                            })}
                        < /ul>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SearchLocation;
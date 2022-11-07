import React, {useContext, useEffect, useState} from 'react';
import '../../assets/styles/SearchLocation.css';
import Modal from "react-modal";
import {UserLocationContext} from "../../context/UserLocationContext";
import {resetLocalStorage} from "../../App";

const SearchLocation = ({userData}) => {
    const [isOpenSearchLocation, setIsOpenSearchLocation] = useState(false);
    const [selectedState, setSelectedState] = useState(localStorage.getItem('correctState'));
    const [selectedRegion, setSelectedRegion] = useState(localStorage.getItem('correctRegion'));
    const {updateCorrectRegion} = useContext(UserLocationContext);
    const [other, setOther] = useState(false);
    const [cities] = useState(userData['cities']);
    const [modalState, setModalState] = useState([]);

    useEffect(() => {
        let array = [];
        Object.keys(cities).map(itemState => {
            Object.values(cities[itemState]).map(itemRegion => {
                return itemRegion.length > 0 && !array.includes(itemState) && array.push(itemState)
            })
            return itemState;
        })
        setModalState(array);
    }, [cities])

    // useEffect(() => {
    //     !modalState.includes(selectedState) && resetLocalStorage();
    // }, [selectedState, modalState])

    const searchLocation = () => {
        updateCorrectRegion('');
        setIsOpenSearchLocation(true);
        setSelectedRegion('');
        setSelectedState('');
    }

    const closeModal = () => {
        setIsOpenSearchLocation(false);
    }

    const customStyles = {
        content: {
            height: 'auto',
            // width: '50%',
            whiteSpace: 'nowrap',
            maxHeight: '65%',
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

                    <div className={'search-location-modal-title'}>
                        {selectedState !== '' && selectedRegion === '' && <div onClick={() => {
                            if (selectedState !== '') {
                                setSelectedState('');
                            }
                        }}><i className="fa fa-arrow-left"></i>
                        </div>}

                        {selectedState === '' && <h3>Select your state</h3>}
                        {selectedState !== '' && selectedRegion === '' && <h3>Select your region</h3>}
                        {selectedState !== '' && (selectedRegion !== '' && selectedRegion !== 'other') &&
                            <h3>Locations</h3>}

                        <div onClick={() => {
                            closeModal();
                        }}><i className={'x-mark'}>&#x2716;</i></div>

                    </div>

                    <div className={'search-location-modal-body'}>
                        <ul>
                            {selectedState && selectedRegion === '' && <li className={'selected-state'}
                                                                           key={selectedState}>{selectedState}</li>}

                            {selectedRegion !== '' && <li className={'selected-region'}
                                                          key={selectedRegion}>{selectedRegion}</li>}

                            {selectedState === '' && (
                                (Object.keys(userData['cities']).map((item) => {
                                    return <li key={item} className={'hover'} onClick={() => {
                                        if (!modalState.includes(selectedRegion)) {
                                            localStorage.setItem('correctState', 'Brisbane and South-East Queensland');
                                            window.location.replace('https://gutterguard.company');
                                            resetLocalStorage();
                                        }
                                        localStorage.setItem('correctState', item);
                                        setSelectedState(item);
                                        setOther(true);
                                    }}>{item}</li>
                                }))
                            )}

                            {selectedState !== '' && selectedRegion === '' &&
                                (
                                    Object.keys(cities[selectedState]).map((region => {
                                            return <li key={region} className={'hover'} onClick={() => {
                                                localStorage.setItem('correctRegion', region);
                                                setSelectedRegion(region);
                                                setOther(false);
                                                updateCorrectRegion(region);
                                                localStorage.removeItem('correctCity');
                                            }}>{region}</li>
                                        }
                                    ))
                                )
                            }
                            {selectedState !== '' && selectedRegion !== '' && !modalState.includes(selectedRegion) && selectedRegion !== "other" && userData &&
                                Object.keys(userData['modalUserLocation'][selectedRegion] || {}).map((region, index) => {
                                    return <li key={index}>{region}
                                        {Object.values(userData['modalUserLocation'][selectedRegion])
                                            .map((item, index) => {
                                                return <ul key={index}>
                                                    <li>{item}</li>
                                                </ul>
                                            })}
                                    </li>
                                })}
                            {other === true && <li key={'other'} className={'hover'} onClick={() => {
                                setSelectedRegion('other');
                                setTimeout(() => {
                                    closeModal()
                                    localStorage.removeItem('correctCity');
                                    localStorage.removeItem('correctRegion');
                                    localStorage.removeItem('correctState');
                                    window.location.replace('https://gutterguard.company')
                                }, 3000);
                                setOther(false)
                            }}>Other</li>}

                            {selectedState !== '' && (selectedRegion !== '' && selectedRegion === "other") &&
                                (
                                    <h5>Talk to our certified roofing professional about gutter guard installers
                                        and gutter replacement specialists in your area.
                                    </h5>
                                )}
                        </ul>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SearchLocation;
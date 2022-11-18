import React, {useContext, useEffect, useState} from 'react';
import '../../assets/styles/SearchLocation.css';
import Modal from "react-modal";
import {UserLocationContext} from "../../context/UserLocationContext";
import {resetLocalStorage} from "../../App";

const SearchLocation = ({userData}) => {
    const [isOpenSearchLocation, setIsOpenSearchLocation] = useState(false);
    const [selectState, setSelectState] = useState(localStorage.getItem('correctState'));
    const [selectRegion, setSelectRegion] = useState(localStorage.getItem('correctRegion'));
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

    const searchLocation = () => {
        updateCorrectRegion('');
        setIsOpenSearchLocation(true);
        setSelectRegion('');
        setSelectState('');
    }

    const closeModal = () => {
        setIsOpenSearchLocation(false);
    }

    const customStyles = {
        content: {
            height: 'auto',
            width: 'auto',
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
                        {selectState !== '' && <div onClick={() => {
                            if (selectState !== '') {
                                setSelectState('');
                                localStorage.removeItem('correctState');
                            }
                            if (selectState !== '' && selectRegion !== '') {
                                setSelectRegion('');
                                localStorage.removeItem('correctRegion');
                            }
                        }}><i className="fa fa-arrow-left"></i>
                        </div>}
                        {selectState === '' && <h3>Select your state</h3>}
                        {selectState !== '' && selectRegion === '' && <h3>Select your region</h3>}
                        {selectState !== '' && (selectRegion !== '' && selectRegion !== 'other') && <h3>Locations</h3>}
                        <div><i className={'x-mark'} onClick={closeModal}>&#x2716;</i></div>
                    </div>

                    <div className={'search-location-modal-body'}>
                        <ul>
                            {selectState && selectRegion === '' && <li className={'selected-state'}
                                                                       key={selectState}>{selectState}</li>}

                            {selectRegion !== '' && <li className={'selected-region'}
                                                        key={selectRegion}>{selectRegion}</li>}

                            {selectState === '' && (
                                (Object.keys(userData['cities']).map((item) => {
                                    return <li key={item} className={'hover'} onClick={() => {
                                        localStorage.setItem('correctState', item);
                                        setSelectState(item);
                                        setOther(true);
                                        if (!!modalState.includes(item) === false) {
                                            window.location.replace('https://gutterguard.company');
                                            resetLocalStorage();
                                        }
                                    }}>{item}</li>
                                }))
                            )}

                            {selectState !== '' && selectRegion === '' &&
                                (
                                    Object.keys(cities[selectState]).map((region => {
                                            return <li key={region} className={'hover'} onClick={() => {
                                                localStorage.setItem('correctRegion', region);
                                                setSelectRegion(region);
                                                setOther(false);
                                                updateCorrectRegion(region);
                                                localStorage.removeItem('correctCity');
                                            }}>{region}</li>
                                        }
                                    ))
                                )
                            }
                            {selectState !== '' && selectRegion !== '' && selectRegion !== "other" && userData &&
                                Object.keys(userData['modalUserLocation'][selectRegion] || {}).map((region, index) => {
                                    return <li key={index}>{region}
                                        {Object.values(userData['modalUserLocation'][selectRegion])[index]
                                            .map((item, index) => {
                                                return <ul key={index}>
                                                    <li>{item}</li>
                                                </ul>
                                            })}
                                    </li>
                                })}
                            {other === true && <li key={'other'} className={'hover'} onClick={() => {
                                setSelectRegion('other');
                                setTimeout(() => {
                                    closeModal()
                                    localStorage.removeItem('correctCity');
                                    localStorage.removeItem('correctRegion');
                                    localStorage.removeItem('correctState');
                                    window.location.replace('https://gutterguard.company')
                                }, 3000);
                                setOther(false)
                            }}>Other</li>}

                            {selectState !== '' && (selectRegion !== '' && selectRegion === "other") &&
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
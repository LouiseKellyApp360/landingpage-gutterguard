import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonConfig from './config/config.json';
import axios from "axios";
import Main from "./Components/Main/Main";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import SearchLocation from "./Components/SearchLocation/SearchLocation";
import {UserLocationContext} from "./context/UserLocationContext";
import Modal from "react-modal";

function App() {
    const jsonData = JSON.parse(JSON.stringify(jsonConfig));
    const cities = jsonData['cities'];
    const getUserRegion = localStorage.getItem('correctRegion');
    const getUserState = localStorage.getItem('correctState');
    const getUserCity = localStorage.getItem('correctCity');
    const [correctRegion, setCorrectRegion] = useState('');
    const [userData, setUserData] = useState({} || jsonData['Brisbane and South-East Queensland']);
    const [userIpCity, setUserIpCity] = useState('');
    const [findCity, setFindCity] = useState('');

    const updateCorrectRegion = (value) => {
        setCorrectRegion(value);
    }

    //Todo: remove the comment below
    //code works good at 4:59 AM 11/5/2022 ->
    useEffect(() => {
        const userIp = async () => {
            // await axios.get('https://ipapi.co/json')
            // .then((res) => {
                // getUserRegion === null && setUserIpCity(res.data['city']);
                getUserRegion === null && setUserIpCity('Brisbane');
            // });
        }

        const userLocation = () => {
            userIpCity && getUserRegion === null && Object.keys(cities).map((userState) => {
                Object.keys(cities[userState]).map((userRegion) => {
                    Object.values(cities[userState][userRegion]).map((city) => {
                        if (userIpCity === city) {
                            setCorrectRegion(userRegion);
                            localStorage.setItem('correctState', userState);
                            localStorage.setItem('correctRegion', userRegion);
                            localStorage.setItem('correctCity', userIpCity);
                            setFindCity(city);
                        }
                        return city;
                    })
                    return userRegion;
                })
                return userState;
            })
        }

        userIp().then(() => {
            userLocation()
            getUserRegion && setUserData(jsonData[getUserRegion]);
        })


    }, [getUserRegion, findCity, userIpCity, correctRegion, getUserState, getUserCity]);


    userIpCity && getUserState === null && window.location.replace("https://www.gutterguard.company/");
    if(correctRegion !== '' && getUserRegion === null && Object.keys(cities[getUserState][getUserRegion]).length === 0) {
        // localStorage.removeItem('correctRegion');
        // localStorage.removeItem('correctState');
        // localStorage.removeItem('correctCity');
        window.location.replace('https://www.gutterguard.company');
    }
    Modal.setAppElement(document.getElementById('root'));

    return (
        <UserLocationContext.Provider value={{correctRegion, updateCorrectRegion}}>
            <div className="App">
                <SearchLocation userData={jsonData}/>
                <Header userData={userData}/>
                <Banner/>
                <Main userData={userData}/>
                <Footer userData={userData}/>
            </div>
        </UserLocationContext.Provider>
    );
}

export default App;

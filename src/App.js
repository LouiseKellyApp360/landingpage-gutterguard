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
import Modal from "react-modal";
import {UserLocationContext} from "./context/UserLocationContext";

function App() {
    const [cities] = useState(JSON.parse(JSON.stringify(Object.values(jsonConfig.cities))) || {});
    const jsonData = JSON.parse(JSON.stringify(jsonConfig) || {});
    const getUserRegion = localStorage.getItem('correctRegion');
    const [userData, setUserData] = useState(jsonData[localStorage.getItem('correctRegion')] || jsonData['Newcastle']);
    const [correctRegion, setCorrectRegion] = useState('');
    const [userIpCity, setUserIpCity] = useState('');
    const [cityExist, setCityExist] = useState('');

    const updateCorrectRegion = (value) => {
        setCorrectRegion(value);
    }

    useEffect(() => {
        const userIp = async () => {
            await axios.get('https://ipapi.co/json')
                .then((res) => {
                    setUserIpCity(res.data['city']);
                });
        }

        const userLocation = () => {
            let userCity = userIpCity;
            let findCity = '';

             getUserRegion === null && userCity && (
                    cities.map((city) => {
                        city.map((item) => {
                            if (item === userCity) {
                                findCity = city[1];
                                localStorage.setItem('correctCity', item);
                                localStorage.setItem('correctState', city[0]);
                                localStorage.setItem('correctRegion', city[1]);
                                setCityExist(findCity);
                                setUserData(jsonData[city[1]])
                            }
                            return item;
                        });
                        return city;
                    })
                )
            }

            if (getUserRegion === false && cityExist === '' ) {
                localStorage.setItem('correctState', 'VICTORIA');
                localStorage.setItem('correctRegion', 'Newcastle');
                localStorage.setItem('correctCity', 'Newcastle');
            }

        userIp().then(() => {
            userLocation()
            getUserRegion && setUserData(jsonData[localStorage.getItem('correctRegion')])
        })
    }, [cities, correctRegion, cityExist, getUserRegion, userIpCity]);


    Modal.setAppElement('#root');

    return (
        <UserLocationContext.Provider value={{correctRegion, updateCorrectRegion}}>
            <div className="App">
                <SearchLocation cities={cities} logo={jsonData['Newcastle']['headerLogo']}/>
                <Header userData={userData}/>
                <Banner/>
                <Main userData={userData}/>
                <Footer userData={userData}/>
            </div>
        </UserLocationContext.Provider>
    );
}

export default App;

import React from 'react';
import '../../assets/styles/Header.css';

const Header = ({userData: {headerTitle, headerLogo, headerLogoName, phoneNumber, phoneIcon}}) => {

    return (
        <div className={'header'}>
            <div className={'header-title'}>
                <h5 style={{textAlign: 'center'}}>{headerTitle}</h5>
            </div>
            <div className={'header-menu'}>
                <div className={'header-logo'} onClick={() => {
                    window.location.replace("https://www.gutterguard.company");
                }}>
                    <img src={headerLogo} alt={'logo'}/>
                    <p style={{cursor: "context-menu"}}>{headerLogoName}</p>
                </div>
                <div className={'header-buttons'}>
                    <a className={'phone'} href={'tel:1300515024'}>{phoneNumber}</a>
                    <img src={phoneIcon} onClick={() => {
                        window.open('tel:' + phoneNumber);
                    }} alt={'tel'}/>
                    <button className={'navigation-form'} onClick={() => {
                        let desktopFormPosition = document.getElementById('form-container').offsetTop
                        let mobileFormPosition = document.getElementById('form-mobile-modal').offsetTop;
                        desktopFormPosition > 0 ? window.scrollTo(0, desktopFormPosition - 50)
                            : window.scrollTo(0, mobileFormPosition - 50);
                    }}>Fast free quote</button>
                </div>
            </div>
        </div>
    )
};

export default Header;
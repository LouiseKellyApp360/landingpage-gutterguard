import React from 'react';
import '../../assets/styles/Footer.css';

const Footer = ({userData: {footerContactUs, footerLocation, footerLogo, footerLogoName, footerAddress}}) => {

    return (
        <div className={'footer-container'}>
            <div className={'footer-logo'} onClick={() => {
                window.location.replace("https://www.gutterguard.company")
            }}>
                <img src={footerLogo} alt={'logo'}/>
                <p style={{cursor: "context-menu"}}>{footerLogoName}</p>
            </div>
            <div className={'footer-links'}>
                <div className={'links'}>
                    <h3>Links</h3>
                    <a href={'https://www.gutterguard.company/terms-and-conditions'}>Privacy Policy</a> <br/>
                    <a href={'https://www.gutterguard.company/privacy-policy'}>Terms and Conditions</a>
                </div>
                <div className={'contact-us'}>
                    <h3>Contact us</h3>
                    {footerContactUs && Object.keys(footerContactUs).map((key, index) => {
                        return <ul key={index}>
                            <li><p>{key}</p></li>
                            {Object.values(footerContactUs[key]).map((item, index) => {
                                return <ul key={index}>
                                    <li><p>{item}</p></li>
                                </ul>
                            })
                            }<br/>
                        </ul>
                    })
                    }
                </div>
                <div className={'opening-hours'}>
                    <h3>Opening Hours</h3>
                    <ul>
                        <li><p>We are open 6 days a week<br/>
                            8am to 6pm</p></li>
                    </ul>
                </div>
                <div className={'address'}>
                    <h3>Address</h3>
                    <ul>
                        <li><p style={{whiteSpace: 'pre-wrap'}}>{footerAddress}</p></li>
                    </ul>
                </div>
                <div className={'locations'}>
                    <h3>Locations</h3>
                    {footerLocation && Object.keys(footerLocation).map((key, index) => {
                        return <ul key={index}>
                            <li><p>{key}</p></li>
                            {Object.values(footerLocation[key]).map((item, index) => {
                                return <ul key={index}>
                                    <li><p>{item}</p></li>
                                </ul>
                            })
                            }
                            {Object.keys(footerLocation)[Object.keys(footerLocation).length - 1] !== key && <br/>}
                        </ul>
                    })
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;
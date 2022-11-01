import React from 'react';
import '../../../assets/styles/Social_Review.css';

const SocialReview = ({userData: {review1, customer1, customer1Img, review2, customer2, customer2Img}}) => {

    return (
        <div className={'social-review'}>
            <div className={'title'}>
                <h1>Hear from our customers</h1>
            </div>
            <div className={'review'}>
                <div className={'customer'}>
                    <p className={'starts'}><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
                    <p className={'customer-quote'}>{review1}</p>
                    <div className={'customer-details'}>
                        <img src={customer1Img} alt={'profile'}/>
                        <div className={'profile-data'}>
                            <p>Gutterguard customer</p>
                            <p>{customer1}</p>
                        </div>
                    </div>
                </div>
                <div className={'customer'}>
                    <p className={'starts'}><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
                    <p className={'customer-quote'}>{review2}</p>
                    <div className={'customer-details'}>
                        <img src={customer2Img} alt={'profile'}/>
                        <div className={'profile-data'}>
                            <p>Gutterguard customer</p>
                            <p>{customer2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialReview;
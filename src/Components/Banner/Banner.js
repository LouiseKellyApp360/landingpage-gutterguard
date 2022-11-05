import React, {useState} from 'react';
import '../../assets/styles/Banner.css';
import bannerImage from '../../assets/image/banner-image.png';
import Modal from "react-modal";
import {useForm} from "react-hook-form";
import '../../assets/styles/Modal-Form.css';
import '../../assets/styles/Form.css';
import axios from "axios";

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    const customStyles = {
        content: {
            overflow: 'scroll',
            overflowY: 'hidden',
            backgroundColor: '#1F3D27',
            top: '50%',
            left: '50%',
            width: '90%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const onSubmit = data => {
        axios.post('https://guttergaur-company.netlify.app/.netlify/functions/api/mail', {data}).then(
            ()=>{window.location.replace('https://www.gutterguard.company/submit/success')}
        ).catch((error)=> {console.error(error)});
        reset();
    };


    return (
        <div className={'banner'}>
            <div className={'banner-image'}>
                <img src={bannerImage} alt={'banner'}/>
            </div>
            <div className={'banner-title'}>
                <h1>Gutter guard and gutter replacement</h1>
                <p>Get a free gutter and gutter guard consultation.</p>
                <button className={'form-mobile-modal'} id={'form-mobile-modal'} onClick={toggleModal}>Fast free quote</button>
            </div>
            <Modal isOpen={isOpen} style={customStyles}>
                <div className={'modal-form'}>
                    <button className={'close'} onClick={()=> {setIsOpen(false)}}>Close</button>
                    <div className={'form-title'}>
                        <h3>Fast free quote</h3>
                    </div>
                    <div className={'form-description'}>
                        <p>Share your address and we will research your needs before we speak</p>
                    </div>
                    <form className={'email-form'} onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder={errors.firstName ? "Please enter your first name" : "First Name"}
                               type="text"
                               {...register("firstName", {required: true})}/>
                        <input placeholder={errors.lastName ? "Please enter your last name" : "Last Name"} type="text"
                               {...register("lastName", {required: true})}/>
                        <input placeholder={errors.email ? "Please enter your email and valid" : "Email"} type="email"
                               {...register("email", {required: true})}/>
                        <input placeholder={errors.phone ? "Please enter your phone number" : "Phone"} type="text"
                               {...register("phone", {required: true})}/>
                        <input placeholder={errors.address ? "Please enter your address" : "Address"} type="text"
                               {...register("address", {required: true})}/>
                        <input placeholder={errors.postCode ? "Please enter your post code" : "Post Code"} type="text"
                               {...register("postCode", {required: true})}/>
                        <input type="submit"/>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default Banner;
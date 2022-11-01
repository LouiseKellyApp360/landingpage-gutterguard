import React from 'react';
import {useForm} from "react-hook-form";
import '../../assets/styles/Form.css';
import axios from "axios";

const Form = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = data => {
        axios.post('https://guttergaur-company.netlify.app/.netlify/functions/api/mail', {data}).then(
            () => {
                window.location.replace('https://www.gutterguard.company/submit/success')
            }
        ).catch((error) => {
            console.error(error)
        });
        reset();
    };


    return (
        <div className={'form-container'} id={'form-container'}>
            <div className={'form-title'}>
                <h3>Fast free quote</h3>
            </div>
            <div className={'form-description'}>
                <p>Share your address and we will research your needs before we speak</p>
            </div>
            <form className={'email-form'} onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={errors.firstName ? "Enter your first name" : "First Name"} type="text"
                       {...register("firstName", {required: true})}/>
                <input placeholder={errors.lastName ? "Enter your last name" : "Last Name"} type="text"
                       {...register("lastName", {required: true})}/>
                <input placeholder={errors.email ? "Enter your email and valid" : "Email"} type="email"
                       {...register("email", {required: true})}/>
                <input placeholder={errors.phone ? "Enter your phone number" : "Phone"} type="text"
                       {...register("phone", {required: true})}/>
                <input placeholder={errors.address ? "Enter your address" : "Address"} type="text"
                       {...register("address", {required: true})}/>
                <input placeholder={errors.postCode ? "Enter your post code" : "Post Code"} type="text"
                       {...register("postCode", {required: true})}/>
                <input type="submit"/>
            </form>

        </div>
    );
};

export default Form;
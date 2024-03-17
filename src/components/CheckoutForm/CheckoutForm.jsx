import React, { useState } from "react";
import styles from './Checkout.module.css';

const CheckoutForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({ name: "", email: "", address: "" });
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(prevData => (
            {...prevData, [name]:value}
        ))
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" placeholder="your name" value={formData.name} required />
            <input onChange={handleChange} type="text" name="name" placeholder="your email" value={formData.email} required />
            <input onChange={handleChange} type="text" name="name" placeholder="your address" value={formData.address} required />
            <button type="submit">Order now</button>
        </form>
    )
}

export default CheckoutForm;
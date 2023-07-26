import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            <h2>Infos soumises :</h2>
            <p>Nom: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Message: {formData.message}</p>
        </div>
    );
};

export default ContactForm;

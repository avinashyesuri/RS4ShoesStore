import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        profession: ''
    });
    const [showPopup, setShowPopup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePasswordClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const handleGeneratePassword = () => {
        const passwordLength = Math.ceil(Math.random() * 5) + 5; // Generates a length between 6 and 10
        const generatedPassword = generateRandomPassword(passwordLength);
        setFormData({ ...formData, password: generatedPassword });
        setShowPopup(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(formData);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px',
        border: '2px solid black',
        padding: '20px',
        borderRadius: '10px',
        width: '400px'
    };

    const inputStyle = {
        width: "220px",
        padding: '10px',
        marginBottom: "15px",
        cursor: "pointer"
    };

    const labelStyle = {
        padding: '5px',
        marginBottom: '5px',
        fontWeight: 'bold'
    };

    const popupStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        border: '2px solid #333',
        borderRadius: '10px',
        zIndex: 1000,
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999
    };

    const passwordContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    };

    const toggleButtonStyle = {
        position: 'absolute',
        right: '10px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
    };

    return (
        <div style={{ margin: '20px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={containerStyle}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                        Password:
                        <div style={passwordContainerStyle}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onClick={handlePasswordClick}
                            />
                            <button type="button" onClick={togglePasswordVisibility} style={toggleButtonStyle}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </label>
                    <label style={labelStyle}>
                        Username:
                        <input type="text" name="username" value={formData.username} onChange={handleChange} required style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                        Profession:
                        <input type="text" name="profession" value={formData.profession} onChange={handleChange} required style={inputStyle} />
                    </label>
                    <button type="submit" style={{ backgroundColor: 'black', color: "white", padding: "8px", borderRadius: "5px", cursor: "pointer" }}>Register</button>
                </form>
            </div>

            {showPopup && (
                <>
                    <div style={overlayStyle} onClick={handlePopupClose}></div>
                    <div style={popupStyle}>
                        <p>How would you like to set your password?</p>
                        <button onClick={handleGeneratePassword} style={{ marginRight: '10px', padding: '8px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white' }}>Auto-generate</button>
                        <button onClick={handlePopupClose} style={{ padding: '8px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#DC3545', color: 'white' }}>Manual</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default RegisterForm;

// Helper function for password generation
const generateRandomPassword = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
};

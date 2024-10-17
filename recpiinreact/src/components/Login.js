import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ email, password });
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

    const linkStyle = {
        marginTop: '15px',
        textDecoration: 'none',
        color: 'blue',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    return (
        <div style={{ margin: '20px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={containerStyle}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
                    </label>
                    <button type="submit" style={{ backgroundColor: 'black', color: "white", padding: "8px", borderRadius: "5px", cursor: "pointer" }}>Login</button>
                </form>
                {/* Registration Link */}
                <h4 style={{marginTop:"15px"}}>Don't have an account?
                <Link to="/register" style={linkStyle}>
                     Register here
                </Link>
                </h4>
               
            </div>
        </div>
    );
};

export default Login; 

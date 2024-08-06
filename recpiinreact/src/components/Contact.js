import React, { useState } from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = ({ icon, text }) => {
    const containerForm = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        maxWidth: '1080px',
        margin: "0 auto",
        border: '2px solid black',
        height: '400px',
        width: '800px',
        padding: "20px",
        cursor: "pointer"
    };
    const subcontai = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1080px',
        margin: "0 auto",
        padding: "20px",
        cursor: "pointer"
    };
    const formC = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: "220px",
        padding: "20px",
        cursor: "pointer"
    };
    const inputStyle = {
        width: "220px",
        padding: '10px',
        marginBottom: "15px",
        cursor: "pointer"
    };

    const onchat = () => {
        console.log("f");
    };
    const [name, setName] = useState("Enter Name");
    const [password, setpassword] = useState("Enter password");
    const [textarea, settextarea] = useState("Enter textarea");
    const onsubmitting = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setpassword(event.target[1].value);
        settextarea(event.target[2].value);

        console.log("name", event.target[0].value);
        console.log("password", event.target[1].value);
        console.log("text", event.target[2].value);
    };

    return (
        <div style={{ margin: '20px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <h3 style={{ fontWeight: '500', margin: "50px 0" }}> LET'S CONNECT:  We're here to help, and we'd love to hear from you!  Whether you have a question, comment,<br></br> or just want to chat, you can reach out to us through
                the contact form on this page, or by phone, email, or social media.. </h3>
            <div>
                <div style={containerForm}>
                    <div style={subcontai}>
                        <div>
                            <button onClick={onchat} style={{ backgroundColor: 'black', color: "white", padding: "8px", borderRadius: "5px", marginRight: "10px",cursor:"pointer"}}>
                                <MdOutlineMessage style={{ marginRight: '10px', fontSize: "15px" }} />
                                VIA SUPPORT CHAT </button>
                            <button style={{ backgroundColor: 'black', color: "white", padding: "8px", borderRadius: "5px", marginRight: "10px",cursor:"pointer"}} >
                                <IoCall style={{ marginRight: '10px', fontSize: "15px" }} />
                                VIA CALL </button>
                        </div>
                        <div>
                            {/* <button>{props.text} {props.icon}</button> */}
                            <button style={{ padding: "8px", borderRadius: "5px", marginTop: "10px", width: "95%",cursor:"pointer" }}>{text} {icon}</button>
                        </div>
                        <form onSubmit={onsubmitting} style={formC} >
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
                                <div>
                                    <label style={{ padding: '5px', position: 'absolute', top: '-15px', left: "5px", background: 'white' }} htmlFor="name">Name</label>
                                    <input style={inputStyle} type="text" placeholder='Enter your name' name="name" />
                                </div>
                                <div>
                                    <label style={{ padding: '5px', position: 'absolute', top: '40px', left: "5px", background: 'white' }} htmlFor="password">Password</label>
                                    <input style={inputStyle} type="password" placeholder='Enter your password' name="password" />
                                </div>
                                <div>
                                    <label style={{ padding: '5px', position: 'absolute', top: '94px', left: "5px", background: 'white' }} htmlFor="area">TextArea</label>
                                    <textarea
                                        style={inputStyle}
                                        placeholder='Enter your text'
                                        name="area"
                                        rows="4"  // Set the number of visible text lines
                                        cols="30" // Set the width in character columns
                                    />
                                </div>

                            </div>
                            <button style={{ backgroundColor: 'black', color: "white", padding: "8px", borderRadius: "5px", width: "60%", alignSelf: "center",cursor:"progress" }}>Submit</button>
                        </form>
                    </div>
                    <div>
                        {/* <h1>{name + " " + textarea}</h1> ---------------------------------------------- HERE U WANT CHECK UP THE VALIDATION?*/}
                        <img style={{ height: "310px", width: "260px" }} src='https://img.freepik.com/premium-vector/business-woman-customer-service_49499-335.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=ais' alt="Customer Service" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

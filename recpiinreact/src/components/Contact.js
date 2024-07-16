import React, { useState } from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Contact = ({ icon, text }) => {     // here i can write as (icon,text) = props
    const containerForm = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        maxWidth: '1080px',
        margin: "0 auto ",
        border: '2px solid black',
        height: '400px',
        width: '800px',
        padding: "20px"
    }
    const subcontai = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1080px',
        margin: "0 auto ",
        padding: "20px"
    }
    const formC = {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        padding: "20px"

    }
    const onchat=()=>{
        console.log("f")
    }
    const [name, setName] = useState("Enter Name")
    const [password, setpassword] = useState("Enter password")
    const [textarea, settextarea] = useState("Enter textarea")
    const onsubmitting=(event)=>{
        event.preventDefault()


        setName(event.target[0].value)
        setpassword(event.target[1].value)
        settextarea(event.target[2].value)

        console.log("name",event.target[0].value)
        console.log("password",event.target[1].value)
        console.log("text",event.target[2].value)
    }


    return (
        <div style={{ margin: '20px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <h1 style={{ margin: '20px 100px', fontWeight: '800', fontSize: '48PX' }} >CONTACT US</h1>
            <p style={{ FontWeight: '500' }}>  LETS CONNECT: WERE HERE TO HELP, AND WED LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT ,
                YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            <div>
                <div style={containerForm}>
                    <div style={subcontai}>
                        <div>
                            <button  onClick={onchat}>
                                <MdOutlineMessage style={{ marginTop: '10px' }} />
                                VIA SUPPORT CHAT </button>
                            <button >

                                <IoCall style={{ marginTop: '10px' }} />
                                VIA CALL </button>
                        </div>
                        <div>
                            {/* <button>{props.text} {props.icon}</button> */}
                            <button>{text} {icon}</button>
                        </div>
                        <form onSubmit={onsubmitting} style={formC}>
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
                                <div>
                                    <label style={{ padding: '5px', position: 'absolute', top: '-15px', left: "5px", background: 'white' }} htmlFor="name">Name</label>
                                    <input style={{ padding: '10px', height: '20px', marginBottom: "15px" }} type="text" placeholder='Enter your name' name="name" />

                                </div>
                                <div>
                                    <label style={{ padding: '5px', position: 'absolute',  top: '45px', left: "5px", background: 'white' }} htmlFor="password">Password</label>
                                    <input style={{ padding: '15px', height: '20px', marginBottom: "15px" }} type="password" placeholder='Enter your password' name="password" />

                                </div>
                                <div>
                                    <label style={{ padding: '5px', position: 'absolute', top: '105px', left: "5px", background: 'white' }} htmlFor="area">TextArea</label>
                                    <textarea  style={{ padding: '15px', height: '20px', marginBottom: "15px" }} placeholder='Enter your text ' name="area" />

                                </div>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
<div>
    {name + " " + textarea}
</div>
                </div>
            </div>



        </div>
    )













}

export default Contact
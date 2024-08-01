import React from 'react';
import f4 from '../imgs/puma.png'
const Herosection = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
   
           margin:'85px'
        // alignSelf
        // padding: '20px',
        // maxWidth: '1280px',
        // margin: '50px'
    };

    // const textContainerStyle = {
    //     maxWidth: '50%',
    // };

    const headingStyle = {
        fontSize: '4.5em',
        margin: '0 0 10px 0',
        letterSpacing: '5px',
        fontWeight: 500
    };
    const innerheadingStyle = {
        fontSize: '7.5em',
        margin: '0 0 10px 0',
        fontWeight: 'bold'
    }
    const subheadingStyle = {
        fontSize: '1.2em',
        margin: '0 0 20px 0',
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '10px',
    };

    const buttonStyleS = {
        padding: '10px 20px',
        fontSize: '1em',
        cursor: 'pointer',
        background: '#d01c28',
        borderRadius: '15px',
        color: 'white'
    };

    const buttonStyleC = {
        padding: '10px 20px',
        fontSize: '1em',
        cursor: 'pointer',
        background: 'grey',
        borderRadius: '15px',
        color: 'white'
    };
    const imageStyle = {
       width:'75%',
        borderRadius: '10px',
        marginLeft: '125PX',
        height: '400px'
    };

    return (
        <>
            <div style={containerStyle}>
                <div >
                    <h1 style={headingStyle}>YOUR FEET </h1>
                    <span style={innerheadingStyle}>DESERVE</span>  <h1 style={headingStyle}>THE BEST </h1>
                    <h3 style={subheadingStyle}>
                        We are here to help you out in the best way to fit the righteous shoes that deserve your feet. The best and Best of the Quality
                    </h3>
                    <div style={buttonContainerStyle}>
                        <button style={buttonStyleS}>Shop Now</button>
                        <button style={buttonStyleC}>Category</button>
                    </div>
                </div>
                <div>
                    <img
                        style={imageStyle}
                        src={f4}
                        alt='shoe'
                    />
                </div>
            </div>
        </>
    );
}

export default Herosection;

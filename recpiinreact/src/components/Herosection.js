    // import React from 'react'

    // const Herosection = () => {
    //   return (
    //     <>
    //         <div>
    //             <h1>YOUR FEET DESERVE THE BEST</h1>
    //             <h3>We are here to help you out in a best way to fit the righteous shoes that deserve your feet. The best and Best of the Quality</h3>
    //             <div>
    //                 <button>Shop Now</button>
    //                 <button>Category </button>
    //             </div>
        
    //         </div>
    //         <div>
    //             <img src='https://thumbs.dreamstime.com/b/varna-bulgaria-april-red-puma-sport-shoes-yellow-background-major-german-multinational-company-product-shot-233501007.jpg' alt ="shoe"  />
    //         </div>

    //     </>
    //   )
    // }

    // export default Herosection

    import React from 'react';

    const Herosection = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px',
        maxWidth:'1280px',
        margin:'50px'
    };

    const textContainerStyle = {
        maxWidth: '50%',
    };

    const headingStyle = {
        fontSize: '4.5em',
        margin: '0 0 10px 0',
        letterSpacing:'5px',
        fontWeight:500
    };
    const innerheadingStyle={
        fontSize: '7.5em',
        margin: '0 0 10px 0',
        fontWeight:'bold'
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
        background:'red',
         borderRadius:'15px',
         color:'white'
    };

    const buttonStyleC = {
        padding: '10px 20px',
        fontSize: '1em',
        cursor: 'pointer',
        background:'grey',
        borderRadius:'15px',
        color:'white'
    };
    const imageStyle = {
        maxWidth: '50%',
        borderRadius: '10px',
        height:'500px',
        width:'95%'
    };

    return (
        <>
        <div style={containerStyle}>
            <div style={textContainerStyle}>
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
                src='https://thumbs.dreamstime.com/b/varna-bulgaria-april-red-puma-sport-shoes-yellow-background-major-german-multinational-company-product-shot-233501007.jpg'
                alt='shoe'
            />
            </div>
        </div>
        </>
    );
    }

    export default Herosection;

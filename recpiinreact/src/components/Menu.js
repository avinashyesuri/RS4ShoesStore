// import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useState,useEffect } from 'react';
const Menu = () => {


  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Ensures 3 cards per row
    gap: '16px',
    padding: '60px',
    color: "white",
    marginTop: "50px"
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '0.2px solid', // set border width
    color: "black",
    overflow: 'hidden',
    backgroundBlendMode: 'overlay, normal',
    backdropFilter: 'blur(13.1842px)',
    borderImageSource: 'radial-gradient(circle, #FF0000, #FFD93D, #6BFFB8)', // more red
    borderImageSlice: 1,
  };


  const [shoep, setShoep] = useState([]);
  const [heart, setHeart] = useState(false)
const [heartedItems, setHeartedItems] = useState({}); // Object to track heart status

const toggleHeart = (id) => {
  setHeartedItems((prevHeartedItems) => ({
    ...prevHeartedItems,
    [id]: !prevHeartedItems[id], // Toggle heart status for the specific item
  }));
};

  const heartChange = () => {
    setHeart(!heart)
  }
  useEffect(() => {
    const getShoePuma = async () => {
      try {
        const shoeRef = collection(db, "shoes");
        const shoesnapshot = await getDocs(shoeRef);
        const shoeList = shoesnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setShoep(shoeList);
      } catch (error) {
        console.log(error);
      }
    };

    getShoePuma(); // Call the function
  }, []);


//   const filterBtns = [{
//     name:'all',
//     type:'all'
// },
// {
// name:'shoes',
// type:'shoes'
// },
// {
// name:'shorts',
// type:'shorts'
// },{
// name:'Tees',
// type:'Tees'
// }]



//   const filterType=(type)=>{
//     if(type === "all"){
//         setfilteredData(data)
//         setseelctedBtn('all')
//         return;
//     }
//     const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
// setfilteredData(filter)
// setseelctedBtn(type)
// }






  return (
    <>
    
    <div className="main_sub_butt">
            {/* {
                filterBtns.map((value,index)=>(
                    <button key ={value.name} onClick={()=> filterType(value.type)}>{value.name} </button>
                ) )} */}
                {/* <button onClick={()=> filterType("all")}>All</button>
                <button onClick={()=> filterType("breakfast")}>BreakFast</button>
                <button onClick={()=> filterType("lunch")}>Lunch</button>
                <button onClick={()=> filterType("dinner")}>Dinner</button> */}
            </div>
      <div style={containerStyle}>
        {shoep.map((prod) => (
          <div key={prod.id} >
            <div style={cardStyle}>
              <img src='data:image/jpeg;base64,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' style={{ height: "100%", width: "100%" }} />
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '10px', padding: "10px 10px 30px 10px", textTransform: "uppercase", letterSpacing: "2px" }}> {prod.Color}</p>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <h4>{prod.ShoeName}</h4>
                  <p>$ {prod.Price}</p>
                </div>

                <button
                  onClick={heartChange}
                  style={{
                    position: 'relative', // or 'relative' depending on the parent container
                    top: '-260px',
                    left: '280px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',fontSize:"30px"
                  }}>
              {/* <FaHeart color={heart ? 'red' : 'gray'} /> */}
              <FaCartPlus
onClick={() => toggleHeart(prod.id)} 
style={{ color: heartedItems[prod.id] ? 'red' : 'grey' }} 
/>
                 </button>
               </div>
             </div>
           </div>
         ))
         }
       </div>
       {/* Render your shoe data here */}
     </>
   );
 };
 export default Menu;


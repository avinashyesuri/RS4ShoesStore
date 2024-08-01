import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaHeart } from "react-icons/fa6";

const Menu = () => {
  const [shoep, setShoep] = useState([]);

  useEffect(() => {
    const getShoePuma = async () => {
      try {
        const shoeRef = collection(db, "shoes");
        const shoesnapshot = await getDocs(shoeRef);
        const shoeList = shoesnapshot.docs.map((doc)=>{
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

  return (
    <>
  {
    shoep.map((prod)=>(
      <div key ={prod.id} >
            <div>
                 <img src='https://www.shutterstock.com/image-photo/nakhon-pathom-thailand-december-30-260nw-1106372834.jpg'/>
                 <div>
                      <h1>{prod.ShoeName}</h1>
                      <p>{prod.Color}</p>
                      <p>{prod.Origin}</p>
                      <p>{prod.Price}</p>
                      <FaHeart  style={{fontSize:"25px"}}/>
                 </div>
            </div>
      </div>
    ))
  }

      {/* Render your shoe data here */}
    </>
  );
};

export default Menu;

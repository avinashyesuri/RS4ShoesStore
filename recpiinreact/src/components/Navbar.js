// import React from 'react'
// import "../App.css"
// const Navbar = () => {
//   return (
//     <>

//     <div >
//       <nav>
//         <div classname="logo">
//           <img src="https://imgs.search.brave.com/tp42x8ZP4VRoxac_9EQXJoTckA_hbJNoKQPrKo6jTAs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY3LzM3/LzRiLzY3Mzc0YjAz/Zjg4ZjUzZWE0YTY1/ZGM5NDk4ZjgxOWFl/LmpwZw" alt="branding" style={{height:"105px", width:"105px",borderRadius:"50%",paddingTop:"30px"}} />
//         </div>
//         <ul>
//            <li>Menu</li>
//            <li>Location</li>
//            <li>About</li>
//            <li>Contact</li>
           
//         </ul>
//         <button>Login</button>
//       </nav>

//     </div>
//   </>
//   )
// }

// export default Navbar




import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="https://imgs.search.brave.com/tp42x8ZP4VRoxac_9EQXJoTckA_hbJNoKQPrKo6jTAs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY3LzM3/LzRiLzY3Mzc0YjAz/Zjg4ZjUzZWE0YTY1/ZGM5NDk4ZjgxOWFl/LmpwZw" alt="branding" style={{ height: "105px", width: "105px", borderRadius: "50%", paddingTop: "30px" }} />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

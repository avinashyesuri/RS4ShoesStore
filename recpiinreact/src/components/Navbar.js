import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <nav>
        <div >
          <img src="https://imgs.search.brave.com/tp42x8ZP4VRoxac_9EQXJoTckA_hbJNoKQPrKo6jTAs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY3LzM3/LzRiLzY3Mzc0YjAz/Zjg4ZjUzZWE0YTY1/ZGM5NDk4ZjgxOWFl/LmpwZw" alt="branding" style={{ height: "105px", width: "105px", borderRadius: "50%", paddingTop: "30px" }} />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div>
          <Link to="/cart">
            <button style={{ marginRight: "10px" }}><FaCartArrowDown /></button>
          </Link>
          {isLoggedIn ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <>
              <Link to="/login">
                <button style={{ marginRight: "10px" }}>Login</button>
              </Link>
          
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import Logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
function Navbar(){
  return(
    <div className="navbar">
<div className="leftSide">
  <img src={Logo} alt='1'/>
</div>
<div className="rightSide"></div>
<Link to="/">Home</Link>
<Link to="/About">About</Link>
<Link to="/Contact">Contact</Link>
<Link to="/Report">Report</Link>
<Link to="/Photos">Photos</Link>
    </div>
  );
}
export default Navbar;
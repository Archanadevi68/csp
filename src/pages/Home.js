import React from "react";
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar";
import '../styles/Home.css'
function Homepage(){
  return(
    <>
    
    <Navbar/>
    <div className="home">
      <img src="/Images/tech.jpg" className="image" alt=""/>
    </div>
    </>
  );
}
export default Homepage;
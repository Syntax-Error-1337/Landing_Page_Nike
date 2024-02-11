import React from "react";

export default function Navbar(){
  return(
    <nav className="Nav">
     <img src="../public/brand_logo.png"/>
    <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
    <button>Login</button>
    </nav>
   
  )
}
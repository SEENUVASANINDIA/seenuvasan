import React from "react";
import "./Header.css";
import logo from "../../Images/logo.jpg";
import MainRouter from "../../Router/Router";
// export default function Header(props) {
export default function Header() {
  return (
    <div className="header">
      {/* <h1>{props.title}</h1>
      <p>{props.subtitle}</p> */}
    {/* <p> </p> */}
      <img  src={logo}height="60%"  alt="Logo" />
      
     <div>
     <MainRouter/>
     </div>
     
     <div>
      
     </div>
    </div>
  );
}

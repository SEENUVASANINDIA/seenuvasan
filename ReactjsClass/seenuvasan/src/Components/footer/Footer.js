import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.jpg";
export default function Header(props) {
  return (
    <div className="footer">
     <img  src={logo}height="30%"  alt="Logo" />
      <h1>{props.note}</h1>
      
    </div>
  );
}

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import .;
// import "./Navbarheader.css";
export class Navbarheader extends Component {
  render() {
    return (
      <div className="App">
        {/* <ul className="App-header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> */}
        <div>

        </div>
        {"\u00a0\u00a0\u00a0"}
        {"\u00a0\u00a0\u00a0"}
        {"\u00a0\u00a0\u00a0"}
        <div>
          <NavLink to="/">Home</NavLink>
          {"\u00a0\u00a0\u00a0"}
         
         <NavLink to="/about">About </NavLink>
         {"\u00a0\u00a0\u00a0"}
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    );
  }
}



export default Navbarheader;

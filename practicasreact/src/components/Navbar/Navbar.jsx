import React from "react";
import Searchbar from '../Searchbar/Searchbar'
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.container}>
      <img src="https://img.icons8.com/doodle/96/000000/apple-weather.png"
      className={style.icon}
      alt='Logo'/>
      <Searchbar/>        
    </div>
  );
}

export default Navbar;

import React from "react";
import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <Navbar></Navbar>
      <Cards></Cards>
    </div>
  );
}

export default Home;

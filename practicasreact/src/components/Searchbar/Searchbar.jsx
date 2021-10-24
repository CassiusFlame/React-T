import React from "react";
import style from "./Searchbar.module.css";

function Searchbar() {
  return (
    <div>
      <form>
        <input 
        className={style.input} 
        placeholder="Buscar ciudad..."
        maxLength="30"
        required
        ></input>
        <button
        className={style.button}
        >Buscar</button>
      </form>
    </div>
  );
}

export default Searchbar;

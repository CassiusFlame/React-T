import React from 'react';
import style from './Card.module.css';

function Card() {
    
    return (
        <div className={style.cardContainer}>
            <button className={style.closeButton}>X</button>
            <h1 className={style.cityNameTitle}>Titulo</h1>
            <div className={style.infoContainer}>
                <div 
                className={style.minMaxTemp}>
                    <h3>Min</h3>
                    <h4>35</h4>
                </div>
                <div 
                className={style.minMaxTemp}>
                    <h3>Max</h3>
                    <h4>38</h4>
                </div>
                <div 
                className={style.icon}>Icon
                </div>
            </div>
            
        </div>
    )
}

export default Card

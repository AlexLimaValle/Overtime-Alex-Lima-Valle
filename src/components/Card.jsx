import React,{useState,useEffect} from "react";
import '../css/Card.css'


function Card({obj}){
   return (
        <div className="clothes__cardDescription">
            <img className="clothes__cardImg" src={obj.img} alt="card imagen" />
            <div className="clothes__info">
                <h2 className="clothes__cardH2">{obj.nombre}</h2>
                <p className="clothes__cardPrice">{`$${obj.precio}`}</p>
                <p className="clothes__cardColor">{obj.color}</p>
            </div>
        </div>
   )
}

export default Card
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {remeras} from "./ProductTees";
import ItemsDetail from "./ItemsDetail";
import '../css/ItemsDetail.css'

function Detail (){
    const {remeraId} = useParams()
    const remera = remeras.find((e)=>e.nombre == remeraId);
    return (
        <div className="ropa">
            <ItemsDetail ropa={remera}/>
        </div>
    )
}


export default Detail
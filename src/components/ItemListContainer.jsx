import React from "react";
import '../css/ItemListContainer.css'

function Publicidad({imagen}){
    return (
        <div className="items__publicidad">
            <img className="items__img" src={`../src/assets/img/publicidad/${imagen}.jpg`} alt="publicidad-1" />
        </div>
    )
}



function ItemListContainer(){
    return (
        <div className="items">
            <Publicidad imagen="publicidad-1"/>
            <Publicidad imagen="publicidad-2"/>
        </div>
    )
}

export default ItemListContainer
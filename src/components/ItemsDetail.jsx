import React from "react";
import '../css/ItemsDetail.css'

function ItemsDetail({ropa}){
    return (
        <div className="ropa__compra">
            <div className="ropa__compraImg">
                <img className="ropa__imagen" src={`${ropa.img}`} alt="ropa" />
            </div>
            <div className="ropa__compraPrecio">
                <h3 className="ropa__title">{ropa.nombre}</h3>
                <p className="ropa__precio">{`$${ropa.precio}`}</p>
                <button className="ropa__boton">Agregar a carrito</button>
            </div>
        </div>
    )

}


export default ItemsDetail 
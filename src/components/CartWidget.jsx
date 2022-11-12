import React from "react";
import Mochila from '../assets/img/iconos/mochila.png';

function CartWidget(){
    return (
        <div className="cart">
            <img className="cart__img" src={Mochila} alt="carrito de compras" />
        </div>
    )
}

export default CartWidget
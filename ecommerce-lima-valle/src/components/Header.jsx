import React from 'react'
import { Component } from 'react'
import Items from './Items'


function CarritoDeCompras(){
    return (
        <div className="nav__cart">
            <img src="../src/assets/img/iconos/mochila.png" alt="carrito" className="nav__cartIcon" />
            <p className="nav__cantCart">0</p>
        </div>
    )
}

function Icono(){
    return (
        <div className="nav__icon">
            <img src="./src/assets/img/iconos/icono.png" alt="sd" className="nav__iconImg" />
        </div>
    )
}

function Letrero(){
    let promocion = "Envios gratis en compras mayores a $5000 ";
    return (
        <div className="header__letrero">
            <div className="header__mover">
                <p className="header__p">{promocion}</p>
                <p className="header__p">{promocion}</p>
                <p className="header__p">{promocion}</p>
                <p className="header__p">{promocion}</p>
                <p className="header__p">{promocion}</p>
            </div>
        </div>
    )
}

function Header(){
    return (
        <header className='header'>
            <Letrero/>
            <nav className="nav">
                <div className="nav__hamburguer">
                    <span className="nav__barra"/>
                    <span className="nav__barra"/>
                    <span className="nav__barra"/>
                </div>
                <Items/>
                <Icono/>
                <CarritoDeCompras/>
            </nav>
        </header>
    )
}

export default Header
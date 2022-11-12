import React from "react";
import Logo from '../assets/img/iconos/icono.png'
import CartWidget from "./CartWidget";
import '../css/NavBar.css';
import { Link } from "react-router-dom";

function Li({items}){
    return (
        <li className="nav__li">
            <img className="nav__li-img" src={`../src/assets/img/iconos/${items}.png`} alt="Remeras" />
            <p className="nav__li-p">{items}</p>
        </li>
    )
}


function NavBar(){
    return (
        <nav className="nav">
            <div className="nav__hamburguer">
                <span className="nav__span"></span>
                <span className="nav__span nav__span--2"></span>
                <span className="nav__span nav__span--3"></span>
            </div>
            <ul className="nav__ul">
                <Link to="/remeras" className="nav__a">
                    <Li items="Remeras" />
                </Link>
                <Link to="/remeras" className="nav__a">
                    <Li items="Joggers" />
                </Link>
                <Link to="/remeras" className="nav__a">
                    <Li items="Medias" />
                </Link>
                <Link to="/remeras" className="nav__a">
                    <Li items="Short" />
                </Link>
                <Link to="/remeras" className="nav__a">
                    <Li items="Buzos" />
                </Link>
            </ul>
            <Link to="/menu" className="nav__linkIcon">
                <img src={Logo} alt="icono de overtime" className="nav__icon" />
            </Link>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
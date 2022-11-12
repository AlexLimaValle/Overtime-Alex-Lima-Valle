import React from "react";
import Logo from '../assets/img/iconos/icono.png'
import '../css/Cartel.css'

function Cartel(){
    return (
        <div className="cartel">
            <div className="cartel__contenido">
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
                <img className="cartel__logo" src={Logo} alt="logo overtime"/>
            </div>
        </div>
    )
}

export default Cartel
import React from "react";
import Letrero from "../components/Letrero";
import NavBar from "../components/NavBar";
import '../css/Menu.css'

function Menu(){
    return (
        <header className="header">
            <Letrero/>
            <NavBar/>
        </header>
    )
}

export default Menu
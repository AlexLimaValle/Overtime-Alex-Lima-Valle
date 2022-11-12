import React from "react";
import RedSocial from "../components/RedSocial";
import '../css/Footer.css'
import Cartel from "../components/Cartel";

function Footer(){
    return(
        <footer className="footer">
            <Cartel/>
            <RedSocial />
        </footer>
    )
}

export default Footer
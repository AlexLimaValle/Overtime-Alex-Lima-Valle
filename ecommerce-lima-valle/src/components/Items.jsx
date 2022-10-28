import { Component } from "react";


function Li({contenido}){
    let cont = contenido;
    return (
        <li className="nav__li">
            <a href="#" className="nav__a">
                <figure className="nav__figure">
                    <img src={`./src/assets/img/iconos/${cont}.png`} alt={contenido} className='nav__figureImg' />
                    <figcaption className='nav__figcaption'>{contenido}</figcaption>
                </figure>
            </a>
        </li>
    )
}

function Items(){
    return (
        <ul className="nav__ul">
            <Li contenido='remera'/>
            <Li contenido='buzo'/>
            <Li contenido='interior'/>
            <Li contenido='medias'/>
        </ul>
    )
}

export default Items
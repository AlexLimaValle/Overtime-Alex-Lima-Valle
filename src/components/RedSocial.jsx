import React from "react";
import instagram from '../assets/img/iconos/instagram.png'
import tiktok from '../assets/img/iconos/tiktok.png'
import youtube from '../assets/img/iconos/youtube.png'
import twitter from '../assets/img/iconos/twitter.png'
import '../css/RedSocial.css'

function RedSocial(){
    return (
        <div className="footer__social">
            <div className="footer__red">
                <a className="footer__a" href="#">
                    <img className="footer__img" src={instagram} alt="instagram" />
                </a>
            </div>
            <div className="footer__red">
                <a className="footer__a" href="#">
                    <img className="footer__img" src={tiktok} alt="instagram" />
                </a>
            </div>
            <div className="footer__red">
                <a className="footer__a" href="#">
                    <img className="footer__img" src={youtube} alt="instagram" />
                </a>
            </div>
            <div className="footer__red">
                <a className="footer__a" href="#">
                    <img className="footer__img" src={twitter} alt="instagram" />
                </a>
            </div>
        </div>
    )

}


export default RedSocial
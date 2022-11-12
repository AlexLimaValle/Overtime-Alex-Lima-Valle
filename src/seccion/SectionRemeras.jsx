import React,{useState,useEffect} from "react";
import Card from "../components/Card";
import {remeras,promesa} from '../components/ProductTees'
import '../css/SectionRemeras.css'
import { Link } from "react-router-dom";


function SectionRemeras(){
    
    const [lista,guardar] = useState([])
    const [loading,notLoading] = useState(true)

    useEffect(()=>{
        promesa.then(resp => guardar(resp)).catch(res => console.log(res)).finally(()=>{notLoading(false)})
    },[])
    return loading ?
        (<div>cargando....</div>)
        : (
            <div className="clothes">
                <h1 className="clothes__title">REMERAS</h1>
                {lista.map((e)=> 
                    <div className={`clothes__card clothes__card--${e.id}`} key={e.id}>
                        <Link to={`/remeras/${e.nombre}`} className="clothes__a">
                            <Card obj={e}/>
                        </Link>
                    </div>)}
            </div>

        )

}


export default SectionRemeras

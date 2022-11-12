import React from "react";

export const remeras = [
    {   
        id:1,
        nombre:"Hollister California Black",
        color:"Black",
        precio: 3400,
        marca:"Hollister",
        img: '../src/assets/img/remeras/remera-1.jpg'
    },
    {   
        id:2,
        nombre:"Hollister Oversize Blue",
        color:"Blue",
        precio: 3100,
        marca:"Hollister",
        img: '../src/assets/img/remeras/remera-2.jpg'
    },
    {   
        id:3,
        nombre:"Hollister Oversize Black",
        color:"Black",
        precio: 3250,
        marca:"Hollister",
        img: '../src/assets/img/remeras/remera-3.jpg'
    },
    {   
        id:4,
        nombre:"Lacoste Sport X Novak",
        color:"Blue",
        precio: 8000,
        marca:"Lacoste",
        img: '../src/assets/img/remeras/remera-4.jpg'
    },
    {   
        id:5,
        nombre:"Lacoste Tenis Sport",
        color:"Black",
        precio: 9000,
        marca:"Lacoste",
        img: '../src/assets/img/remeras/remera-5.jpg'
    },
    {   
        id:6,
        nombre:"Lacoste Tennis Sport Crocodile Oversize",
        color:"Grey",
        precio: 3250,
        marca:"Lacoste",
        img: '../src/assets/img/remeras/remera-6.jpg'
    }

]

export const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(remeras)
    },3000)
})

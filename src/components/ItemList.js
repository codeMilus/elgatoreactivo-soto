import '../styles/ItemList.css'

import { useState, useEffect } from 'react'

import Item from './Item'

const ItemList = () => {

    const products = [
        {
            id: 0,
            title: "Playera Rust",
            description: "Playera manga corta del lenguaje de programación Rust",
            price: 13.990,
            pictureUrl: "https://i.ebayimg.com/images/g/KBEAAOSwA-1a4~xW/s-l300.jpg" 
        },
        {
            id: 1,
            title: "Playera ADDICTED TO WIFI",
            description: "Playera manga corta con el texto 'ADDICTED TO WIFI'",
            price: 14.990,
            pictureUrl: "https://i.ebayimg.com/images/g/znoAAOSw1bFevQWE/s-l300.jpg" 
        },
        {
            id: 2,
            title: "Zapatillas Famicon",
            description: "Zapatillas de lona con diseño de la consola Famicon",
            price: 46.990,
            pictureUrl: "https://i.etsystatic.com/23550181/r/il/71a5cb/2514529009/il_300x300.2514529009_s1up.jpg" 
        },
        {
            id: 3,
            title: "Taza Praise the Sun",
            description: "Taza de Dark Souls Solaire Praise the Sun",
            price: 8.990,
            pictureUrl: "https://www.libreriaserendipia.com/imagenes/3665361/366536101943.JPG" 
        }
    ]

    const callData = (time) => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => {
                    resolve(products)
                }, time)
            } else {
                reject('Error')
            }
        })
    } 

    const [datos, setDatos] = useState([])

    useEffect(() => {
        callData(2000)
        .then(res => {
            setDatos(res)
        })
        .catch(err => console.log(err))
    }, [])
    

    return(
        <div className="items">
            {
            datos.map(item => {
                return(
                    <Item 
                        key = {item.id}
                        pictureUrl = {item.pictureUrl}
                        title = {item.title}
                        price = {item.price}
                        description = {item.description}
                    />
                )
            })
            }
        </div>
    )
}

export default ItemList
import '../styles/ItemCount.css'

import { useState } from 'react'

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(0)

    const decrementCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }
    const incrementCantidad = () => {
        if (cantidad < props.stock) {
            setCantidad(cantidad + 1)
        }
    }
    const onAdd = () => {
        if (cantidad > 0) {
            alert(`${props.productName} ha sido agregado al carrito.`)
        }
    }

    return(
        <div className="counter">
            <p className="counter__product">{props.productName} ({props.stock})</p>
            <div className="counter__display">
                <button onClick={decrementCantidad} className="counter__btn">-</button>
                <p className="counter__num">{cantidad}</p>
                <button onClick={incrementCantidad} className="counter__btn">+</button>
            </div>
            <button onClick={onAdd} className="counter__btn-add">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
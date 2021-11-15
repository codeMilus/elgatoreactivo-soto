import '../styles/CartWidget.css'

const CartWidget = () => {
    return(
        <button className="cart">
            <i className="fas fa-shopping-cart"></i>
            <p className="cart__count">0</p>
        </button>
    )
}

export default CartWidget
import '../styles/NavBar.css'

import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <>
            <header className="header">
                <div className="header__content container">
                    <a href="/" className="header__logo">El<span> Gato </span>Reactivo</a>
                    <nav className="nav">
                        <a className="nav__item" href="/">Inicio</a>
                        <a className="nav__item" href="/">Ropa</a>
                        <a className="nav__item" href="/">Calzado</a>
                        <a className="nav__item" href="/">Accesorios</a>
                    </nav>
                    <CartWidget />
                </div>
            </header>
        </>
    )
}

export default NavBar
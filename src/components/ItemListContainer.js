import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return(
        <div className="container">
                <h2>{props.greeting}</h2>
                <ItemCount productName="Pantalón" stock={24}/>
                <ItemCount productName="Zapatillas" stock={0}/>
        </div>
    )
}

export default ItemListContainer
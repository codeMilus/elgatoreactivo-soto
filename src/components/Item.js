import '../styles/Item.css'

const Item = (props) => {
    return(
        <div className="card">
            <img className="card__img" alt="" src={props.pictureUrl} />
            <div className="card__info">
                <p className="card__product">{props.title}</p>
                <p className="card__price">${props.price}</p>
                <p className="card__desc">{props.description}</p>
            </div>
        </div>
    )
}

export default Item
import { Link } from "react-router-dom"


const ItemCard = ({id, stock, nombre, precio, descripcion, img}) => {

    return (
        <div className='col-4 m-2'>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>
            {stock <= 5 && <p style={{fontWeight: 700, color: 'red'}}>Quedan sólo {stock} unidades!</p>}

            <p>Precio: ${precio}</p>
            <Link className="btn btn-primary" to={`/detail/${id}`}>Ver más</Link>
        </div>
    )
}

export default ItemCard

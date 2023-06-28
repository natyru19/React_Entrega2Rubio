import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ id, nombre, precio, descripcion, img, stock}) => {
  return (
    <div className="col-3 m-2 container my-5">
      <h4>{nombre}</h4>
      <img className="imagenMapeo" src={img} alt={nombre} />
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <Link className="btn btn-primary" to={`/detail/${id}`}>
        Ver más
      </Link>
    </div>
  );
};

export default ItemCard;

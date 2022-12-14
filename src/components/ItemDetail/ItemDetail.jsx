import React, { useContext } from "react";
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0);
    const { addProducto } = useContext(CartContext);

    const agregarProducto = (cantidad) => {
        setCantidad(cantidad);
        addProducto(item, cantidad);
    };

    return (
        <>
        <div key={item.id} className="container">
            <ul>
                <li>
                    <div className="container conten-detalle">
                    <img src={'/images/' + item.img} className="card-img-top card-ItemD" width="150px" alt={item.name} />
                        <div className="conetenedor-detalle">
                            <h2>{item.name}</h2>
                                <p>
                                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor 
                                     sit amet.
                                 </p>
                                <h3>$ {item.precio}</h3>
                                <hr />

                                {cantidad === 0 ? (
                                    <ItemCount stock={10} inicial={1} agregarProducto={agregarProducto} />
                                ) : (
                                    <Link to="/cart">Ir al carrito</Link>
                                )}
    
                        </div>
                    </div>
                </li>        
                <li>

                </li>
            </ul>
        </div>
        </>
    )
};

export default ItemDetail;


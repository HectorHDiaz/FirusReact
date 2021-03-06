import { useContext } from "react";
import {Link} from 'react-router-dom';

import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";


const ItemDetail = ({mascota}) => {

const {addItem, isInCart, removeItem} = useContext(CartContext)
const cartAdd = (qty) =>{
    addItem(mascota, qty)
}

return(
    <div className="container">
        <div className="card Detail mb-3" style={{width:"60vw"}}>
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={mascota.imagen} className="img-fluid rounded-start" alt={mascota.nombre}/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{mascota.nombre}</h5>
                        <p className="card-text">{mascota.descripcion}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{mascota.genero}</li>
                            <li className="list-group-item">{mascota.especie}</li>
                            <li className="list-group-item">{mascota.edad}</li>
                        </ul>

                        {isInCart(mascota.id)?
                        <div>
                        <Link to='/cart' className='btn btn-success'>Terminar Compra</Link>
                        <button className='btn btn-danger' onClick={()=>removeItem(mascota)}>Eliminar de carrito</button>
                        </div>
                        :
                        <></>
                        }
                        <ItemCount initial={1} max={20} cartAdd={cartAdd}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;
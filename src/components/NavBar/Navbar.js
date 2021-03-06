import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"} className="navbar-brand">
                <img src="https://i.imgur.com/38GH9x0.png" width="150" alt="" loading="lazy"/>
            </Link>
            <div className="">
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <Link to={'/category/Adopcion'}>En Adopción</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/category/Perdidos'}>Perdidos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/category/Adoptados'}>Adoptados</Link>
                    </li>
                </ul>
            </div>
            <CartWidget/>
      </nav>
    )
}

export default Navbar

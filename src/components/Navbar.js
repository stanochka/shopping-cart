import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
    <nav className='Navbar'>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
    </nav>
    )
}
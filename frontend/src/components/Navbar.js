import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <Link to="/">
        <span className="navbar-brand"> <img src="img/coolzone.png" alt="logo" width="100" height="100" className="logo"/></span>
      </Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/" className="nav_home">Home</Link>
        </li>

        <li>
          <a href="/#cool" className="nav_shop">Shop</a>
        </li>

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span className="nav_cart">
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

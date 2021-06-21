import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>

      
      <Link to="/">
        <span className="navbar-brand"> <img src="img/coolzone.png" alt="logo" width="100" height="100" className="logo"/></span>
      </Link>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/#cool">Shop</a>
        </li>

        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
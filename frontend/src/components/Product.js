import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, price, name, productId }) => {
  return (
    <div className="product">
      <Link to={`/product/${productId}`}>
      <img src={imageUrl} alt={name} className="product_img" />
      </Link>

      <div className="product__info">
        
       <Link to={`/product/${productId}`}>
        <p className="info__name">{name}</p>
        <p className="info__price">${price}</p>
        </Link>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
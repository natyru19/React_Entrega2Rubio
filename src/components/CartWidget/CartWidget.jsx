import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import "./CartWidget.css";


const CartWidget = () => {
const { cart, totalCantidad } = useContext(CartContext)
  return (
    <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
      <ShoppingCartIcon />
<span>{totalCantidad()}</span>
    </Link>
  );
};

export default CartWidget;

import "./Header.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav>
          <img
            className="header__logo"
            src="https://static.vecteezy.com/system/resources/previews/011/658/621/original/black-and-white-house-icon-with-transparent-background-png.png"
            alt="logo"
          />

          <Link className="header__link" to="/">Inicio</Link>
          <Link className="header__link" to="/productos/living">Living</Link>
          <Link className="header__link" to="/productos/cocina">Cocina</Link>

          <CartWidget />
        </nav>
      </div>
    </header>
  );
};

export default Header;

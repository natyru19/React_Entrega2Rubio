import "./Header.css";
import CartWidget from "../CartWidget/CartWidget";

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
          <a className="header__link" href="#">
            Cocina
          </a>
          <a className="header__link" href="#">
            Living
          </a>
          <a className="header__link" href="#">
            Patio
          </a>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};

export default Header;

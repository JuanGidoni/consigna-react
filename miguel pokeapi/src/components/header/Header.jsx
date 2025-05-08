import logoImgHeader from "../../assets/logo.png";
import "./Header.css";

export function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <img
          src={logoImgHeader}
          alt="the logo of Pokemigapi"
          className="logo"
        />
      </div>

    </header>
  );
}

export default Header;
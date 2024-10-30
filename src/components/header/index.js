import "./header.css"; 
import { Menus } from "../../utils"; // Ensure Menus is imported
import Logo from "../../assets/Screenshot 2024-10-30 115128.png";
import DesktopMenu from "../DesktopMenu";
import MobMenu from "../MobMenu";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
         
          <h3 className="logo-text">instant</h3>
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <ul className="menu-list">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name} />
          ))}
        </ul>

        <div className="actions">
          <button  className="start-for-free">
            Start for free
          </button>
          <div className="mobile-menu">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
}

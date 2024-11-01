import { NavLink } from "react-router-dom";
import icons from "../assets/images/icon.png";
export default function Header() {
  return (
    <nav className="header-vanlife">
      <div className="container rows all-components">
        <div className="Logo">
          <NavLink to="/">
            <h1>VANLIFE</h1>
          </NavLink>
        </div>
        <div className="about-vans">
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to="van"
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to="login"
          >
            <div className="login-icon">
              <img src={icons} alt="login icon" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

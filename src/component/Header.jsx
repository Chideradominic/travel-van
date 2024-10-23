import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <div className="container rows all-components">
        <div className="Logo">
          <NavLink to="/">
            <h1>VANLIFE</h1>
          </NavLink>
        </div>
        <div className="about-vans">
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to="/van"
          >
            Vans
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

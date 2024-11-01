import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <nav className="host all-components">
        <div className="container">
          <div className="host-nav-bar">
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive ? "link-active-host" : null
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active-host" : null
              }
              to="income"
            >
              Income
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active-host" : null
              }
              to="vans"
            >
              Vans
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active-host" : null
              }
              to="reviews"
            >
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </div>
      </nav>
    </>
  );
}

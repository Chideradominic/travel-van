import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <nav className="host all-components">
        <div className="container">
          <div className="host-nav-bar">
            <NavLink
              to="/host"
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
              to="/host/income"
            >
              Income
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active-host" : null
              }
              to="/host/vans"
            >
              Vans
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active-host" : null
              }
              to="/host/reviews"
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

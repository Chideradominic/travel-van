import { Link, NavLink, useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import apiCall from "../assets/api";
export function loader({ params }) {
  console.log(params);
  return apiCall(params.id);
}

export default function HostVanDetails() {
  const hostVans = useLoaderData();

  function styletype(type) {
    if (type === "simple") {
      return "#E17654";
    } else if (type === "rugged") {
      return "#115E59";
    } else {
      return "#161616";
    }
  }
  return (
    <>
      <div className="host-van-container">
        <div className="container">
          <Link to=".." relative="path">
            &larr; Back to all vans
          </Link>

          <div className="host-van-item">
            <div className="van-list ">
              <div className="host-van-image-details">
                <img src={hostVans.imageUrl} alt={hostVans.name} />
              </div>
              <div>
                <p
                  className="van-type"
                  style={{ backgroundColor: styletype(hostVans.type) }}
                >
                  {hostVans.type.charAt(0).toUpperCase() +
                    hostVans.type.slice(1)}
                </p>
                <h2>{hostVans.name}</h2>
                <p>
                  ${hostVans.price}
                  /day
                </p>
              </div>
            </div>
            <div className="host-detail-links">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active-host" : null
                }
                end
                to={`.`}
              >
                Details
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active-host" : null
                }
                to={`pricing/${hostVans.id}`}
              >
                Pricing
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active-host" : null
                }
                to={`photos/${hostVans.id}`}
              >
                Photos
              </NavLink>
            </div>
            <Outlet context={hostVans} />
          </div>
        </div>
      </div>
    </>
  );
}

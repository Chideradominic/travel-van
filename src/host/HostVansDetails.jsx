import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostVanDetails() {
  const [hostVans, setHostVans] = useState(null);
  const param = useParams();

  // fetch data from API based on vanId
  useEffect(() => {
    fetch(`/api/vans/${String(param.id)}`)
      .then((res) => res.json())
      .then((data) => setHostVans(data.van))
      .catch((err) => console.error(err));
  }, [param.id]);

  console.log(hostVans);
  console.log(param); // will print the id value
  // will style the vehicle type
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
          {hostVans ? (
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
          ) : (
            <div>loading.....</div>
          )}
        </div>
      </div>
    </>
  );
}

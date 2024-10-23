import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div className="host-van-container">
        <div className="container">
          <Link to="/host/vans">Back to all vans </Link>
          {hostVans ? (
            <div className="van-list">
              <div className="host-van-image">
                <img src={hostVans.imageUrl} alt={hostVans.name} />
              </div>
              <div>
                <p>
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
          ) : (
            <div>loading.....</div>
          )}
        </div>
      </div>
    </>
  );
}

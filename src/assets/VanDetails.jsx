import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function VanDetails() {
  const [van, setVan] = useState(null);
  const params = useParams();
  console.log(params.id);
  // fetch data from API based on vanId
  useEffect(() => {
    fetch(`/api/vans/${String(params.id)}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van))
      .catch((err) => console.error(err));
  }, [params.id]);
  console.log(van);

  function gettypeColor(van) {
    if (van.type === "simple") {
      return "#E17654";
    } else if (van.type === "rugged") {
      return "#115E59";
    } else if (van.type === "luxury") {
      return "#161616";
    }
  }

  return (
    <div className="van-component">
      {van ? (
        <div className="container">
          <Link to="/van" className="back-to-van">
            Back to all Vans
          </Link>
          <div>
            <img src={van.imageUrl} alt={`image of ${van.name} van`} />
          </div>
          <p
            className="van-type"
            style={{ backgroundColor: gettypeColor(van) }}
          >
            {van.type
              ? van.type.charAt(0).toUpperCase() + van.type.slice(1)
              : ""}
          </p>
          <h1>{van.name}</h1>
          <p>
            <strong>${van.price}</strong>/day
          </p>
          <p className="van-description">{van.description}</p>
          <button className="button-link">Rent this van</button>
        </div>
      ) : (
        <h2>Loading......</h2>
      )}
    </div>
  );
}

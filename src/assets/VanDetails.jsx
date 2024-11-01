import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import apiCall from "./api";
export function loader({ params }) {
  return apiCall(params.id);
}
export default function VanDetails() {
  const [van, setVan] = useState(null);
  const params = useParams();
  const locations = useLocation();
  const data = useLoaderData();
  console.log(data);

  // fetch data from API based on vanId
  useEffect(() => {
    fetch(`/api/vans/${String(params.id)}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van))
      .catch((err) => console.error(err));
  }, [params.id]);
  console.log(locations.state?.type);

  const displayLocation = locations.state ? locations.state.search : "";
  const displayType = locations.state?.type || "all";

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
    <div className="van-component all-components">
      {van && (
        <div className="container">
          <Link
            to={`..${displayLocation}`}
            relative="path"
            className="back-to-van"
          >
            &larr;{" "}
            {displayLocation === "?type="
              ? "Back to all Vans"
              : `Back to ${displayType} vans`}
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
      )}
    </div>
  );
}

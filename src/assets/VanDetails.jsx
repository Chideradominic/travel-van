import { Link, useLocation, useLoaderData } from "react-router-dom";
import apiCall from "./api";
export async function loader({ params }) {
  console.log(params);
  return await apiCall(params.id);
}
export default function VanDetails() {
  const locations = useLocation();
  const van = useLoaderData();

  // fetch data from API based on vanId
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
        <p className="van-type" style={{ backgroundColor: gettypeColor(van) }}>
          {van.type ? van.type.charAt(0).toUpperCase() + van.type.slice(1) : ""}
        </p>
        <h1>{van.name}</h1>
        <p>
          <strong>${van.price}</strong>/day
        </p>
        <p className="van-description">{van.description}</p>
        <button className="button-link">Rent this van</button>
      </div>
    </div>
  );
}

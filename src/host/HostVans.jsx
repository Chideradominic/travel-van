import { Link, useLoaderData } from "react-router-dom";
import apiCall from "../assets/api";
export function loader() {
  return apiCall(); // Replace with your API call
}
export default function Vans() {
  const vans = useLoaderData();

  const hostVan = vans.map(({ imageUrl, price, id, name }) => (
    <li key={id}>
      <Link to={id}>
        <div className="van-list">
          <div className="host-van-image">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="vans-name-price">
            <h2>{name}</h2>
            <p>${price}/day</p>
          </div>
        </div>
      </Link>
    </li>
  ));
  return (
    <>
      <h1>Your Listed Vans</h1>
      <div className="container">
        <ul className="van-ul">{hostVan}</ul>
      </div>
    </>
  );
}

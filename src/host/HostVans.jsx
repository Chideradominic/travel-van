import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error("Error:", error));
  }, []);
  const hostVan = vans.map(({ imageUrl, price, id, name }) => (
    <li key={id}>
      <Link to={`/host/vans/${id}`}>
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

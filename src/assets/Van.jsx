import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Van() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error("Error:", error));
  }, []);

  function gettype(type) {
    if (type === "simple") {
      return "#E17654";
    } else if (type === "rugged") {
      return " #115E59";
    } else {
      return "#161616";
    }
  }

  const vanElement = vans.map(({ imageUrl, price, id, name, type }) => (
    <li key={id}>
      <Link to={`/van/${id}`} className="vans-list">
        <div className="van-images">
          <img className="van-image" src={imageUrl} alt="VanImage" />
        </div>
        <div className="name-price">
          <p className="van-name">{name}</p>
          <p className="van-price">${price}</p>
        </div>
        <p className="van-type" style={{ backgroundColor: gettype(type) }}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
      </Link>
    </li>
  ));

  return (
    <>
      <div className="container all-components">
        <h1>Explore our van options</h1>
        <ul className="vanLists">{vanElement}</ul>
      </div>
    </>
  );
}

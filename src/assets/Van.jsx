import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import apiCall from "./api";
export function loader() {
  return apiCall();
}
export default function Van() {
  const [searchParams, setSearchParams] = useSearchParams();

  // const [vans, setVans] = useState([]);
  const vans = useLoaderData();

  const filterType = searchParams.get("type");

  const displayedFilter = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;

  function gettype(type) {
    if (type === "simple") {
      return "#E17654";
    } else if (type === "rugged") {
      return " #115E59";
    } else {
      return "#161616";
    }
  }
  function genNewSearchParamString(key, value) {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams); // Create a new instance
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      return newParams;
    });
  }

  const vanElement = displayedFilter.map(
    ({ imageUrl, price, id, name, type }) => (
      <li key={id}>
        <Link
          to={id}
          state={
            filterType && {
              search: `?type=${filterType ? filterType : ""}`,
              type: filterType,
            }
          }
          className="vans-list"
        >
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
    )
  );

  return (
    <>
      <div className="container van-components">
        <h1>Explore our van options</h1>
        <button
          className={
            filterType === "simple"
              ? `selected-${filterType}`
              : "van-type simple"
          }
          onClick={() => genNewSearchParamString("type", "simple")}
        >
          Simple
        </button>
        <button
          className={
            filterType === "rugged"
              ? `selected-${filterType}`
              : "van-type rugged"
          }
          onClick={() => genNewSearchParamString("type", "rugged")}
        >
          Rugged
        </button>
        <button
          className={
            filterType === "luxury"
              ? `selected-${filterType}`
              : "van-type luxury"
          }
          onClick={() => genNewSearchParamString("type", "luxury")}
        >
          Luxury
        </button>
        {filterType && (
          <button
            className="clear-filter"
            onClick={() => genNewSearchParamString("type", null)}
          >
            Clear filter
          </button>
        )}

        <ul className="vanLists">{vanElement}</ul>
      </div>
    </>
  );
}

// function genNewSearchParamString(key, value) {
//     const sp = new URLSearchParams(searchParams)
//     if (value === null) {
//       sp.delete(key)
//     } else {
//       sp.set(key, value)
//     }
//     return `?${sp.toString()}`
//   }

// function handleFilterChange(key, value) {
//   setSearchParams(prevParams => {
//     if (value === null) {
//       prevParams.delete(key)
//     } else {
//       prevParams.set(key, value)
//     }
//     return prevParams
//   })
// }

// return (
//   <main>
//     <h2>Home</h2>
//     <div>
//       <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
//       <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
//       <Link to={genNewSearchParamString("type", null)}>Clear</Link>
//     </div>
//     <div>
//       <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
//       <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
//       <button onClick={() => handleFilterChange("type", null)}>Clear</button>
//     </div>
//     <hr />
//     {charEls}
//   </main>
// );
// }

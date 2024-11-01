import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const van = useOutletContext();

  return (
    <>
      {van ? (
        <div className="host-van-pricing">
          <h2>${van.price}</h2>
          <span>/day</span>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

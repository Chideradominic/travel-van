import { useOutletContext } from "react-router-dom";
export default function HostVanDetails() {
  const vans = useOutletContext();

  return (
    <>
      {vans ? (
        <div className="van-details-inside-items">
          <p>
            <strong>Name:</strong> {vans.name}
          </p>
          <p>
            <strong>Category:</strong>{" "}
            {vans.type.charAt(0).toUpperCase() + vans.type.slice(1)}
          </p>
          <p>
            <strong>Decription:</strong> {vans.description}
          </p>
          <p>
            <strong>Visibility</strong> Public
          </p>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

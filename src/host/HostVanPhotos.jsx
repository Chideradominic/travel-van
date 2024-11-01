import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const van = useOutletContext();
  return (
    <>
      {van && (
        <div className="host-van-image-details">
          <img src={van.imageUrl} alt={van.name} />
        </div>
      )}
    </>
  );
}

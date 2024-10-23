import { Link } from "react-router-dom";
import aboutImg from "./images/about.png";
export default function AboutUs() {
  return (
    <>
      <div className="about-main all-components">
        <img src={aboutImg} className="about-img" alt="About Image" />
      </div>
      <div className="container about-items">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="explore">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <Link to="/van" className="explore-btn">
            Explore our van
          </Link>
        </div>
      </div>
    </>
  );
}

import "./App.css";
import Home from "./assets/Home";
import About from "./assets/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Van from "./assets/Van";
import VanDetails from "./assets/VanDetails";
import Layout from "./component/Loader";
import HostLayout from "./host/HostLayout";
import Income from "./host/Income";
import Reviews from "./host/Reviews";
import HostVans from "./host/HostVans";
import Dashboard from "./host/Dashborad";
import HostVansDetails from "./host/HostVansDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="van" element={<Van />} />
            <Route path="van/:id" element={<VanDetails />} />
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./assets/Home";
import About from "./assets/About";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { requireAuth } from "./utili";
import ErrorComponent from "./component/ErrorComponent";
import Van, { loader as vanLoader } from "./assets/Van";
import VanDetails, { loader as vanDetailsLoader } from "./assets/VanDetails";
import Layout from "./component/Loader";
import HostLayout from "./host/HostLayout";
import Income from "./host/Income";
import Reviews from "./host/Reviews";
import HostVans, { loader as hostVanLoader } from "./host/HostVans";
import Dashboard from "./host/Dashborad";
import HostVansDetails, {
  loader as hostVansDetailLoader,
} from "./host/HostVansDetails";
import HostVanDetailsOnly from "./host/HostVanDetailsOnly";
import HostVanPhotos from "./host/HostVanPhotos";
import HostVanPricing from "./host/HostVanPricing";
import NotFoundPage from "./assets/NotFoundPage";
import LoginComponent from "./component/LoginComponent";

function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="van"
          errorElement={<ErrorComponent />}
          element={<Van />}
          loader={vanLoader}
        />
        <Route path="login" element={<LoginComponent />} />
        <Route
          path="van/:id"
          element={<VanDetails />}
          loader={vanDetailsLoader}
          errorElement={<ErrorComponent />}
        />
        <Route
          path="host"
          element={<HostLayout />}
          loader={requireAuth}
          errorElement={<ErrorComponent />}
        >
          <Route index element={<Dashboard />} />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => await requireAuth()}
          />
          <Route path="vans" element={<HostVans />} loader={hostVanLoader} />
          <Route
            path="vans/:id"
            element={<HostVansDetails />}
            loader={hostVansDetailLoader}
            errorElement={<ErrorComponent />}
          >
            <Route
              index
              element={<HostVanDetailsOnly />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="pricing/:id"
              element={<HostVanPricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photos/:id"
              element={<HostVanPhotos />}
              loader={async () => {
                return null;
              }}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;

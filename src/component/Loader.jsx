import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Loader() {
  return (
    <>
      <div className="allbody">
        <div className="header-allbody">
          <Header />
        </div>
        <div className="body-items">
          <Outlet />
        </div>
        <div className="footer-items">
          <Footer />
        </div>
      </div>
    </>
  );
}

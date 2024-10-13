import "./App.css";
import Home from "./assets/Home";
import About from "./assets/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <div className="container rows">
            <div className="Logo">
              <Link to="/">
                <h1>VANLIFE</h1>
              </Link>
            </div>
            <div className="about-vans">
              <Link to="/about">About</Link>
              <Link to="/"> Vans</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <div className="footer">
            <p>c 2024 VanLife. All rights reserved.</p>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;

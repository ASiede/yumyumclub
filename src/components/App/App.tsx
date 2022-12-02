import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Selector } from "../Choose/Choose";
import { Endpoint } from "../../Constants";
import { Spots } from "../Spots/Spots";
import { Visited } from "../Visited/Visited";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>YUMYUMCLUB</p>
        <nav className="nav">
          <a className="nav-link" href={`/${Endpoint.SPOTS}`}>
            Spots To Visit
          </a>
          <a className="nav-link" href={`/${Endpoint.SELECTOR}`}>
            Select
          </a>
          <a className="nav-link" href={`/${Endpoint.VISITED}`}>
            Spots Visited
          </a>
        </nav>
      </header>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path={`/`} element={<Spots />} />
            <Route path={`/${Endpoint.SPOTS}`} element={<Spots />} />
            <Route path={`/${Endpoint.SELECTOR}`} element={<Selector />} />
            <Route path={`/${Endpoint.VISITED}`} element={<Visited />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

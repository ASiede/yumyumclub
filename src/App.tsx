import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Selector } from "./Selector";
import { Spots } from "./Spots";
import { Visited } from "./Visited";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>yumyumclub</p>
        <nav>
          <a href="/spots">Spots To Visit</a> | <a href="/selector">Select</a> |
          <a href="/visited">Spots Visited</a>
        </nav>
      </header>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path={`/`} element={<Spots />} />
            <Route path={`/spots`} element={<Spots />} />
            <Route path={`/selector`} element={<Selector />} />
            <Route path={`/visited`} element={<Visited />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

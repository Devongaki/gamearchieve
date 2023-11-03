import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./component/Nav/Nav";
import { HomePage } from "./component/pages/Home/Home";
import { GamesPage } from "./component/pages/Games/Games";
import { AboutPage } from "./component/pages/About/About";

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

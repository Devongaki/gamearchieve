import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./component/Nav/Nav";
import { HomePage } from "./component/pages/Home/Home";
import { GamesPage } from "./component/pages/Games/Games";
import { AboutPage } from "./component/pages/About/About";
import { GameDetailsPage } from "./component/pages/Games/GameInfo";
import { DataProvider } from "./component/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/game-details/:gameId" element={<GameDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

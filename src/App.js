
import './App.css';
import Carousel from './components/Crousel';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Clubs_card from './clubs/Clubs_card';
import Kritash from './clubspages/Kritash';
import Sport_main from './sports/Sport_main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clubs" element={<Clubs_card />} />
          {/* <Route path="/Clubpage" element={<Indiviual_page />} /> */}
          <Route path="/Kritash" element={<Kritash />} />
          <Route path="/Sports" element={<Sport_main />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;


import './App.css';
import Carousel from './components/Crousel';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Club from './clubs/Club';
import Kritash from './clubspages/Kritash';
import Abhivayakt from './clubspages/Abhivayakt';
import Arthitics from './clubspages/Arthitics';
import Astronomy from './clubspages/Astronomy';
import Coding from './clubspages/Coding';
import Dance from './clubspages/Dance';
import Dramatizer from './clubspages/Dramatizer';
import Malang from './clubspages/Malang';
import Robotics from './clubspages/Robotics';
import Sae from './clubspages/Sae';
import Wellbeing from './clubspages/Wellbeing';
import Sport_main from './sports/Sport_main';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clubs" element={<Club />} />
          <Route path="/Sports" element={<Sport_main />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>

        <Routes>
          <Route path="/Abhivayakt" element={<Abhivayakt />} />
          <Route path="/Arthitics" element={<Arthitics />} />
          <Route path="/Astronomy" element={<Astronomy />} />
          <Route path="/Coding" element={<Coding />} />
          <Route path="/Dance" element={<Dance />} />
          <Route path="/Dramatizer" element={<Dramatizer />} />
          <Route path="/Kritash" element={<Kritash />} />
          <Route path="/Malang" element={<Malang />} />
          <Route path="/Robotics" element={<Robotics />} />
          <Route path="/Sae" element={<Sae />} />
          <Route path="/Wellbeing" element={<Wellbeing />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

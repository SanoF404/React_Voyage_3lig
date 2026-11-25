import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Acceuil/Acceuil";
import Apropos from "./components/Apropos/Apropos";
import Destinations from "./components/Destinations/Destinations";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

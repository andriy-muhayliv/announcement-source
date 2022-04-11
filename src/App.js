import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/container/Container";
import Navigation from "./components/navigation/Navigation";
import MainPage from "./pages/MainPage";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <div className="relative">
      <div className="absolute bg-wet-asphalt w-full h-screen z-0" />
      <div className="bg-wet-asphalt w-full z-10 absolute">
        <Navigation />
        <Container>
          <Routes>
            <Route path="/announcement" element={<MainPage />} />
            <Route path="/technologies" element={<Technologies />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;

import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import './App.css';
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Navigation />
      <Routes className="router">
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

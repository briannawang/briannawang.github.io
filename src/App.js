import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
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
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";
import './App.css';
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export const REDIRECT_URL = "/me"

function App() {
  return (
    <main>
      <Navigation />
      <Routes className="router">
        <Route>
          <Route path="/" element={<Home />} />
          <Route path={`${REDIRECT_URL}`} element={<Home />} />
          <Route path={`${REDIRECT_URL}/about`} element={<About />} />
          <Route path={`${REDIRECT_URL}/projects`} element={<Projects />} />
          <Route path={`${REDIRECT_URL}/resume`} element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

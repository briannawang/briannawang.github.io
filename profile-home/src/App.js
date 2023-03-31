import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let quote = `Yet we have seen those machines— whether their moving parts are arms and torsos or pistons, ` +
    `wheels, and springs— being put to work to realize impossible fantasies: cathedrals, moon shots, ` +
    `transcontinental railways. Certainly, poetic technologies had something terrible about them; the ` +
    `poetry is likely to be as much of dark satanic mills as of grace or liberation. But the rational, ` + 
    `administrative techniques were always in service to some fantastic end.`;
    quote = quote.toUpperCase();
  return (
    <main>
      <Navigation />
      <div className="display-quote">
        {quote}
      </div>
      <Home />
      {/* <About />
      <Projects /> */}
    </main>
  );
}

export default App;

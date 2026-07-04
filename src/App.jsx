import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.js";
import Contact from "./components/Contact.jsx";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }



  return (
    <div className={isDarkMode ? "app dark" : "app"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        
        //<Contact />
        
      </main>

    </div>
  );
}

export default App;

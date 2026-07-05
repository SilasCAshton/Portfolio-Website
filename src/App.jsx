import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx"
import { useState } from "react";
import { Link } from "react-router"

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
      </main>
      <Footer />
    </div>
  );
}

export default App;

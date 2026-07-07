import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";

const sections = [
  { id: "about", label: "About", Component: About },
  { id: "skills", label: "Skills", Component: Skills },
  { id: "projects", label: "Projects", Component: Projects },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const ActiveSection =
    sections.find((section) => section.id === activeSection)?.Component ?? About;

  function toggleTheme() {
    setIsDarkMode((currentMode) => !currentMode);
  }

  function showSection(sectionId) {
    setActiveSection(sectionId);

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  return (
    <div className={isDarkMode ? "app dark" : "app"}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        sections={sections}
        onSectionChange={showSection}
      />

      <main>
        <Home onSectionChange={showSection} />
        <ActiveSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;

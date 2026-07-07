function Navbar({
  isDarkMode,
  toggleTheme,
  activeSection,
  sections,
  onSectionChange,
}) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <button className="navbar-name" onClick={() => onSectionChange("about")}>
          Silas Ashton
        </button>

        <nav className="navbar-links" aria-label="Main navigation">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`navbar-link ${activeSection === id ? "active" : ""}`}
              onClick={() => onSectionChange(id)}
            >
              {label}
            </button>
          ))}

          <a href="#footer" className="navbar-link">
            Contact
          </a>

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

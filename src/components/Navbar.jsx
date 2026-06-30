function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <header className="navbar">
      <nav className="navbar-content">
        <a href="#home" className="navbar-name">
          Silas Ashton
        </a>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

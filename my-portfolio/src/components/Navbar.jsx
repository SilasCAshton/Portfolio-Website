function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-content">
        <a href="#home" className="navbar-name">
          Your Name
        </a>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

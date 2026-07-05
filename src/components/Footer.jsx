import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            SA
          </Link>

          <p className="footer-tagline">
            Software engineering graduate building practical web applications,
            embedded systems projects, and useful software tools.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        <div className="footer-links">
          <a
            href="https://github.com/SilasCAshton"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/silascashton/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:silascashton@gmail.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Silas Ashton. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
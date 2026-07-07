function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-tagline">
            I’m open to software development opportunities, collaboration, and
            connecting with other developers.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/SilasCAshton"
            target="_blank"
            rel="noreferrer"
          >
            GitHub: SilasCAshton
          </a>

          <a
            href="https://www.linkedin.com/in/silas-ashton-225291264/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn: SilasCAshton
          </a>

          <a href="mailto:silascashton@gmail.com">silascashton@gmail.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Silas Ashton. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;

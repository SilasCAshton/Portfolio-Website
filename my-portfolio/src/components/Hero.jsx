function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Your Name.</h1>

        <p className="hero-subtitle">
          I am a software developer interested in building useful applications,
          solving technical problems, and learning modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button button-primary">
            View Projects
          </a>

          <a href="#contact" className="button button-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

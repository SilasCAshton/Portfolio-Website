const homeActions = [
  { label: "View Projects", sectionId: "projects", variant: "primary" },
  { label: "About Me", sectionId: "about", variant: "secondary" },
];

function Home({ onSectionChange }) {
  return (
    <div className="home">
      <section className="home-intro">
        <div className="home-intro-content">
          <p className="home-eyebrow">Software Engineering Graduate</p>

          <h1 className="home-title">Hi, I'm Silas Ashton.</h1>

          <p className="home-subtitle">
            I build practical web applications, embedded systems projects, and
            software tools that solve real problems.
          </p>

          <div className="home-actions">
            {homeActions.map(({ label, sectionId, variant }) => (
              <button
                key={sectionId}
                className={`button button-${variant}`}
                onClick={() => onSectionChange(sectionId)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

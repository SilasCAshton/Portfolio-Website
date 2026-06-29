const projects = [
  {
    title: "Project One",
    description:
      "Briefly describe what this project does, what problem it solves, and what technologies you used.",
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Briefly describe another project. Try to include what you learned or what makes it interesting.",
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "Add a third project here. Portfolio projects can include school projects, personal tools, or experiments.",
    link: "https://www.youtube.com/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-content">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I have used for software development, embedded systems, and academic projects.",
    skills: ["C++", "Python", "Java", "C", "Ada", "C#", "JavaScript"],
  },
  {
    title: "Web Development",
    description: "Tools and technologies I use to build responsive and interactive web applications.",
    skills: ["React", "HTML", "CSS", "Next.js", "Vercel", "Google APIs"],
  },
  {
    title: "Embedded & Hardware",
    description: "Experience working close to hardware through microcontrollers, FPGA tools, and sensor-based systems.",
    skills: ["Raspberry Pi", "RP2040", "FPGA", "JTAG", "RISC-V", "NEORV32"],
  },
  {
    title: "Tools & Workflow",
    description: "Development tools and practices I use to organize, build, debug, and maintain projects.",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Agile"],
  },
];

function Skills() {
  return (
    <section id="skills" className="content-section skills">
      <div className="section-content">
        <h2>Skills</h2>

        <p className="skills-intro">
          These are some of the languages, tools, and technologies I have worked
          with through coursework, personal projects, and hands-on development.
        </p>

        <div className="card-grid skills-grid">
          {skillGroups.map((group) => (
            <article className="card skills-card" key={group.title}>
              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <ul className="skills-chip-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
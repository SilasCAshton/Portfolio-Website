const projects = [
  {
    title: "Ada Baremetal Programmer",
    image: "Ada_Logo.png",
    description:
      "As a team of students, we developed an open-source Ada-based bare-metal programmer that uses an RP2040 microcontroller to bridge a host PC and FPGA target over USB, UART, and JTAG. The system provides a low-cost alternative to proprietary programming tools and supports interaction with a NEORV32 RISC-V soft-core processor on FPGA hardware.",
    link: "https://sites.psu.edu/behrendseniordesign/2026/04/27/ada-baremetal-programmer/",
  },
  {
    title: "Indoor Room Sensor Dashboard",
    image: "Raspberry_Pi_Logo.png",
    description:
      "This project is a Raspberry Pi-based environmental monitoring system written in Python. It uses multiple sensors to measure and display real-time room conditions, including temperature, humidity, and light intensity. The system brings together hardware interaction and Python programming to create a practical tool for monitoring indoor environments.",
    link: "https://github.com/SilasCAshton/Room-Sensor-Dashboard",
  },
  {
    title: "Race to Zilea",
    image: "Unity_Logo.jpeg",
    description:
      "This project is a strategy-based video game developed in Unity using C#. Players compete on a 2D hexagonal map by controlling resources, constructing buildings, and deploying troops. The game combines resource management and tactical decision-making, with victory achieved when a player reaches the required number of victory points.",
    link: "https://github.com/ryan9186/RaceToZilea",
  },
  {
    title: "Rubik's Cube Solver",
    image: "Rubiks_Cube.png",
    description:
      "This is an ongoing project where I am developing a C++ Rubik’s Cube solver that models cube state, piece movement, and solving logic. The project is designed to take a scrambled cube state as input and return a sequence of moves to solve it efficiently. This project strengthens my experience with algorithm design, object-oriented programming, data modeling, and problem solving.",
    link: "https://github.com/SilasCAshton/Cube-Solver",
  },
];

function Projects() {
  return (
    <section id="projects" className="content-section projects">
      <div className="section-content">
        <h2>Projects</h2>

        <div className="card-grid project-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="project-card-header">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-image"
                />

                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
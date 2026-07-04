import { projects } from '../data'

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <img src={proj.image} alt={proj.title} />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.demo} className="btn-small" target="_blank" rel="noreferrer">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
import { personalInfo } from '../data'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container home-content">
        <div className="home-text">
          <h1>Hello, I'm <span className="highlight">{personalInfo.name}</span></h1>
          <p className="role">{personalInfo.role}</p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
        <div className="home-img">
          <img src={personalInfo.image} alt={personalInfo.name} />
        </div>
      </div>
    </section>
  )
}

export default Home
import { personalInfo } from '../data'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">{personalInfo.about}</p>
      </div>
    </section>
  )
}

export default About
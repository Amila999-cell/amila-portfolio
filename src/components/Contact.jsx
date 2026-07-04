import { personalInfo } from '../data'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully! (Demo)')
  }

  return (
    <section id="contact" className="section-padding" style={{ background: '#1e293b' }}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="social-links">
          <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={personalInfo.social.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={personalInfo.social.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact
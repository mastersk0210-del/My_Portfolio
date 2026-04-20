import profile_img from '../../assets/about_profile.jpeg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './about.css'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As an experienced in data analytics, I am eager to embark on a professional journey where I can contribute to the success and growth of prestigious organizations. My passion for data analytics drives me to bring enthusiasm and dedication to each project, and I am excited to gain more and more knowledge in developing my skills in this dynamic field.</p>
                <p>My diverse background in web technologies and programming languages makes me a versatile in the field of development too, capable of tackling a wide range of challenges.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="pandas" className="skill-logo"/>
                  <p>Data Analytics</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="tensorflow" className="skill-logo"/>
                  <p>Machine Learning</p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" alt="matplotlib" className="skill-logo"/>
                  <p>Visualizations</p><hr style={{width:"80%"}} />
                </div>
                <div className="about-skill">
                  <div className="skill-logo-group">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="java"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="python"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" alt="r"/>
                  </div>
                  <p>Java / Python / R</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="scikitlearn" className="skill-logo"/>
                  <p>Artificial Intelligence</p><hr style={{width:"65%"}} />
                </div>
                <div className="about-skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg" alt="huggingface" className="skill-logo"/>
                  <p>Natural Language Processing</p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="pytorch" className="skill-logo"/>
                  <p>Deep Learning</p><hr style={{width:"65%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>HANDS ON EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>CERTIFICATIONS</p>
        </div>
      </div>
    </div>
  )
}

export default About


import footer_logo from '../../assets/footer_logo.png'
import github from '../../assets/github.svg'
import insta from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am a highly passinato in the field of Artificial Intelligence and Data Science and analytics based in Ireland and India</p>
        </div>
        <div className="contact-detail">
                  <img src={github} alt=""/><a href="https://github.com/mastersk0210-del" target="_blank" rel="noreferrer"><p> GitHub</p></a>
                </div>
                <div className="contact-detail">
                  <img src={insta} alt=""/><a href="https://www.instagram.com/_.just._sk._?igsh=dnM5ZTA5MzIxbnV4" target="_blank" rel="noreferrer"><p> Instagram</p></a>
                </div>
                <div className="contact-detail">
                  <img src={whatsapp} alt=""/><a href="https://wa.me/353894002480" target="_blank" rel="noreferrer"><p> Whatsapp</p></a>
                </div>
                <div className="contact-detail">
                  <img src={linkedin} alt=""/><a href="https://www.linkedin.com/in/srikaran-sankar/" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
                </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 mastersk. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

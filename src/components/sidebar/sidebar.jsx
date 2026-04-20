import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './sidebar.css'

const Sidebar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <p onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#services" offset={50}>
            <p onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#work" offset={50}>
            <p onClick={() => setMenu("work")} className={menu === "work" ? "active" : ""}>My Works</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

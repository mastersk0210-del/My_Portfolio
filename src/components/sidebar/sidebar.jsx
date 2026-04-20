import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import './sidebar.css'

const Sidebar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setMenu(item);
    setIsOpen(false);
  }

  return (
    <>
      <div className="sidebar-toggle" onClick={() => setIsOpen(true)}>
        <img src={menu_open} alt="open menu" />
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <img src={menu_close} alt="close menu" className="sidebar-close" onClick={() => setIsOpen(false)} />
        <ul className="sidebar-menu">
          <li>
            <AnchorLink className="anchor-link" href="#home" offset={100}>
              <p onClick={() => handleSelect("home")} className={menu === "home" ? "active" : ""}>Home</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#about" offset={50}>
              <p onClick={() => handleSelect("about")} className={menu === "about" ? "active" : ""}>About Me</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#services" offset={50}>
              <p onClick={() => handleSelect("services")} className={menu === "services" ? "active" : ""}>Services</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#work" offset={50}>
              <p onClick={() => handleSelect("work")} className={menu === "work" ? "active" : ""}>My Works</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#contact" offset={50}>
              <p onClick={() => handleSelect("contact")} className={menu === "contact" ? "active" : ""}>Contact</p>
            </AnchorLink>
          </li>
        </ul>
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default Sidebar

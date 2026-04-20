import { useState, useEffect } from 'react'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import MyWork from './components/mywork/mywork'
import Navbar from './components/navbar/navbar'
import Services from './components/services/services'
import Chatbot from './components/chatbot/chatbot'
import Sidebar from './components/sidebar/sidebar'

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme}/>
      <Sidebar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      <Chatbot/>
    </div>
  )
}

export default App

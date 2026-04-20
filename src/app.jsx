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
  return (
    <div>
      <Navbar/>
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

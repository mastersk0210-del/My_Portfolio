import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import MyWork from './components/mywork/mywork'
import Navbar from './components/navbar/navbar'
import Services from './components/services/services'
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
    </div>
  )
}

export default App

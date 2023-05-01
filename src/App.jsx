import { useState } from 'react'
import './App.css'
import {Header} from './components/header/header'
import {Services} from './components/servicios/services'
import  {Proyects} from './components/proyectos/proyects' 
import { Packages } from './components/precio/precio'
import { About } from './components/about/about'
import { Contact } from './components/contact/contact'
import { Footer } from './components/footer/footer'
import { Banner } from './components/banner/banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Banner></Banner>
      <Services></Services>
       <Proyects/> 
       <Packages></Packages>
       <About></About>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  )
}

export default App

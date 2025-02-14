import Navbar from './components/Navbar'
import Inicio from './components/inicio'
import AboutMe from './components/AboutMe'
import MyProject from './components/myProject'
import ContactMe from './components/contacMe'
import './index.css'

function App() {
  return (
      <div className='App'>
        <Navbar />
        <main>
            <Inicio />
            <AboutMe />
            <MyProject />
            <ContactMe />
        </main>
      </div>
  )
}
export default App

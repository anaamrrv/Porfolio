import Navbar from './components/Navbar'
import Inicio from './components/inicio'
import AboutMe from './components/aboutMe'
import './index.css'

function App() {
  return (
      <div className='App'>
        <Navbar />
        <main>
            <Inicio />
            <AboutMe />
        </main>
      </div>
  )
}
export default App

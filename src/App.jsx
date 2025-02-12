import Navbar from './components/Navbar'
import Inicio from './components/inicio'
import AboutMe from './components/AboutMe'
import MyProject from './components/myProject'
import './index.css'

function App() {
  return (
      <div className='App'>
        <Navbar />
        <main>
            <Inicio />
            <AboutMe />
            <MyProject />
        </main>
      </div>
  )
}
export default App

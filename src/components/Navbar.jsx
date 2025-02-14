//directiva para indicar que el componente se ejecuta en el lado del cliente
"use client" 

//hooks de React
// useState - permite manejar el estado dentro del componente
// useEffect - permite ejecutar efectos secundarios ( como escuchar eventos )
import "../styles/Navbar.css"

export default function Navbar() {
    function scrollToSection(id) {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

    // Renderizado de componente
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <button onClick={() => scrollToSection('.hero')}>Inicio</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('.about')}>Sobre mí</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('.project')}>Mis proyectos</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('.contact')}>Contacta conmigo
                    </button>
                </li>
            </ul>
        </nav>

    )
}
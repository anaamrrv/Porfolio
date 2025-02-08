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
                    <button>Inicio</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('.about')}>Sobre mí</button>
                </li>
            </ul>
        </nav>

    )
}
import "../styles/MyProject.css"
import { useState } from "react"

export default function MyProject() {
  
    const projects = [
        {
            title: "Proyecto 1",
            image: "p1.jpg",
            description: "Descripcion breve del proyecto 1"
        },
        {
            title: "Proyecto 2",
            image: "p2.jpg",
            description: "Descripcion breve del proyecto 2"
        },
        {
            title: "Proyecto 3",
            image: "p3.jpg",
            description: "Descripcion breve del proyecto 3"
        },
        {
            title: "Proyecto 4",
            image: "p4.jpg",
            description: "Descripcion breve del proyecto 4"
        }
    ]

    const carrousel = () => {
        const [current, setCurrent] = useState(0)

        const prevSlide = () => {
            setCurrent(current === 0 ? projects.length - 1 : current - 1)
        }

        const nextSlide = () => {
            setCurrent(current === projects.length - 1 ? 0 : current +1)
        }
    

    return (
    <section id="project">
        <div>
            <h1>Mis proyectos</h1>
        </div>
        <div className="carousel-container">
            <button className="nav-btn left" onClick={prevSlide}>‹</button>
            <div className="carousel-slide">
                <img src={projects[current].image} alt={proyects[current].title}></img>
                <h3>{projects[current].title}</h3>
                <p>{projects[current].description}</p>
            </div>
            <button className="nav-btn right" onClick={nextSlide}>›</button>
        </div>
    </section>
 
  )
}
}

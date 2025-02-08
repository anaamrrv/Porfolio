import "../styles/Inicio.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src='me.jpg'
          alt="Professional portrait"
          className="portrait"
        />
      </div>
      <div className="portfolio-text-container">
        <h1 className="portfolio-text">Portfolio</h1>
      </div>
      <div className="hero-content">
        <h2 className="name">Ana Marmolejo</h2>
        <h3 className="role-text">PROGRAMADORA WEB</h3>
        <button className="download-button">Descarga CV</button>
      </div>
    </section>
  )
}


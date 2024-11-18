import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './home.css'; 

function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="SUNSUCA Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><a href="/servicios" className="nav-link">Servicios</a></li>
            <li><a href="/galeria" className="nav-link">Galería</a></li>
            <li><a href="/eventos" className="nav-link">Eventos</a></li>
            <li><a href="/login" className="btn-login">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <main className="gallery-content">
        <section className="intro-section">
          <h1>Sunsuca</h1>
          <h2>Tecnología Agroecológica para un Futuro Sostenible</h2>
          <p>Innovación y sostenibilidad en cada semilla</p>
          <a href="/servicios" className="btn-primary">Descubre Nuestros Servicios</a>
        </section>

        <section className="services-section">
          <h2>Servicios Destacados</h2>
          <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src="/SembradoE.jpg" alt="Sembrado Ecológico" />
                </div>
                <div className="service-info">
                  <h3>Sembrado Ecológico</h3>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img src="/RiegoA.jpg" alt="Riego Automático" />
                </div>
                <div className="service-info">
                  <h3>Riego Automático de hectareas</h3>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img src="/CuidadoA.jpg" alt="Cuidado Del Medio Ambiente" />
                </div>
                <div className="service-info">
                  <h3>Cuidado Del Medio Ambiente</h3>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img src="/Procesasimiento.png" alt="Procesamiento de Residuos" />
                </div>
                <div className="service-info">
                  <h3>Procesamiento de Residuos Biológicos</h3>
                </div>
              </div>
            </div>

        </section>

        <section className="cta-section">
          <h2>¿Listo para transformar tu agricultura?</h2>
          <div className="cta-buttons">
            <a href="/servicios" className="btn-secondary">Ver Catálogo</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="SUNSUCA Logo" />
          </div>
          
          <div className="footer-contact">
            <h3>Contacto</h3>
            <ul>
              <li>+1 234 567 890</li>
              <li>info@sunsuca.com</li>
              <li>123 Calle Principal, Ciudad, País</li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SUNSUCA. Todos los derechos reservados.</p>
        </div>
      </footer>
      
    </div>
  );
}

export default HomePage;

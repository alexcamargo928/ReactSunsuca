import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './servicios.css';

// Definición de los servicios
const servicios = [
  {
    id: 1,
    nombre: "Sembrado Ecológico",
    descripcionCorta: "Técnicas de siembra que respetan el medio ambiente y maximizan la producción sostenible.",
    imagen: "/SembradoE.jpg",
    detalles: [
      "Métodos innovadores que combinan prácticas tradicionales con tecnología moderna.",
      "Maximizamos la salud del suelo mediante técnicas de rotación de cultivos y compostaje.",
      "Sistemas de control biológico de plagas para reducir el uso de pesticidas.",
    ],
    beneficios: [
      "Promueve un ambiente agrícola más saludable.",
      "Aumenta la rentabilidad al maximizar los recursos naturales.",
      "Reduce la dependencia de productos químicos."
    ],
  },
  {
    id: 2,
    nombre: "Riego Automático de Hectáreas",
    descripcionCorta: "Sistemas de riego inteligentes que optimizan el uso del agua en grandes extensiones.",
    imagen: "/RiegoA.jpg",
    detalles: [
      "Tecnología de punta para asegurar que cada planta reciba la cantidad exacta de agua que necesita.",
      "Sensores de humedad y estaciones meteorológicas para optimizar el riego.",
    ],
    beneficios: [
      "Reducción de consumo de agua.",
      "Mejora la eficiencia en el uso de recursos.",
      "Permite riego preciso y programado."
    ]
  },
  {
    id: 3,
    nombre: "Cuidado Del Medio Ambiente",
    descripcionCorta: "Asesoría para la conservación del ecosistema agrícola.",
    imagen: "/CuidadoA.jpg",
    detalles: [
      "Evaluaciones de impacto ambiental con planes de mitigación personalizados.",
      "Prácticas de conservación del suelo para prevenir la erosión."
    ],
    beneficios: [
      "Protege los recursos naturales a largo plazo.",
      "Mejora la salud del ecosistema agrícola.",
      "Contribuye a la sostenibilidad de la región."
    ]
  },
  {
    id: 4,
    nombre: "Procesamiento de Residuos Biológicos",
    descripcionCorta: "Convertimos los residuos agrícolas en recursos valiosos para su explotación.",
    imagen: "/Procesasimiento.png",
    detalles: [
      "Transformación de desechos agrícolas en compost de alta calidad.",
      "Producción de biogás a partir de residuos orgánicos."
    ],
    beneficios: [
      "Reducción de residuos en los vertederos.",
      "Creación de fertilizantes naturales para mejorar la calidad del suelo.",
      "Generación de energía renovable."
    ]
  }
];

function ServiciosPage() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectService = (id) => {
    const servicio = servicios.find(serv => serv.id === id);
    setServicioSeleccionado(servicio);
    setModalVisible(true); // Mostrar el modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Cerrar el modal
  };

  // Crear el contenido del modal
  const modalContent = servicioSeleccionado && (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{servicioSeleccionado.nombre}</h2>
        <p>{servicioSeleccionado.descripcionCorta}</p>
        <div className="service-benefits">
          <h3>Beneficios:</h3>
          <ul>
            {servicioSeleccionado.beneficios.map((beneficio, index) => (
              <li key={index}>{beneficio}</li>
            ))}
          </ul>
        </div>
        <div className="service-features">
          <h3>Detalles:</h3>
          <ul>
            {servicioSeleccionado.detalles.map((detalle, index) => (
              <li key={index}>{detalle}</li>
            ))}
          </ul>
        </div>
        <button className="btn-primary" onClick={handleCloseModal}>
          Cerrar
        </button>
      </div>
    </div>
  );

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
            <li><a href="/nosotros" className="nav-link">Nosotros</a></li>
            <li><a href="/login" className="btn-login">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="services-section">
          <h2>Servicios</h2>
          <div className="services-grid">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="service-card" onClick={() => handleSelectService(servicio.id)}>
                <div className="service-image">
                  <img src={servicio.imagen} alt={servicio.nombre} />
                </div>
                <div className="service-info">
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcionCorta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usar Portal para mostrar el modal */}
        {modalVisible && ReactDOM.createPortal(modalContent, document.body)}
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
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
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

export default ServiciosPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2, MessageCircle } from 'lucide-react';
import './galeria.css'; // Aquí es donde van tus estilos personalizados

const imagenesGaleria = [
  {
    id: 1,
    src: "/galeria1.jpg",
    alt: "Campo de trigo con sistema de riego automático",
    titulo: "Riego Inteligente en Campos de Trigo",
    descripcion: "Implementación de sistema de riego automático en campos de trigo, optimizando el uso del agua y aumentando la productividad.",
    fecha: "2023-05-15",
    tipoCultivo: "Cereales",
    ubicacion: "Zona Rural, Región Central",
    likes: 245,
    comentarios: 18
  },
  {
    id: 2,
    src: "/galeria2.jpg",
    alt: "Plantación de tomates con sensores de humedad",
    titulo: "Sistema Inteligente para Cultivo de Tomates",
    descripcion: "Uso de sensores de humedad y temperatura para optimizar el riego y mejorar el rendimiento de los tomates.",
    fecha: "2023-07-10",
    tipoCultivo: "Hortalizas",
    ubicacion: "Finca Agroverde, Norte del País",
    likes: 300,
    comentarios: 25
  },
  {
    id: 3,
    src: "/galeria3.jpg",
    alt: "Cultivo de maíz con drones de monitoreo",
    titulo: "Monitoreo Inteligente de Cultivos de Maíz",
    descripcion: "Uso de drones para monitorear los cultivos de maíz, identificando áreas con estrés hídrico y optimizando los recursos.",
    fecha: "2023-04-21",
    tipoCultivo: "Cereal",
    ubicacion: "Granjas del Sur, Región Andina",
    likes: 150,
    comentarios: 12
  },
  {
    id: 4,
    src: "/galeria4.jpg",
    alt: "Invernadero automatizado con control de clima",
    titulo: "Invernadero Inteligente con Control Climático",
    descripcion: "Invernadero automatizado que ajusta la temperatura y humedad de manera inteligente para maximizar la producción de hortalizas.",
    fecha: "2023-03-05",
    tipoCultivo: "Verduras",
    ubicacion: "Ecohuerto Verde, Ciudad Central",
    likes: 175,
    comentarios: 20
  },
  {
    id: 5,
    src: "/galeria5.jpg",
    alt: "Sistemas de riego por goteo inteligente en arrozales",
    titulo: "Riego Inteligente en Cultivos de Arroz",
    descripcion: "Implementación de sistemas de riego por goteo inteligente que ahorran agua y mejoran el rendimiento de los cultivos de arroz.",
    fecha: "2023-08-01",
    tipoCultivo: "Cereal",
    ubicacion: "Campos del Este, Región Costera",
    likes: 210,
    comentarios: 30
  },
  {
    id: 6,
    src: "/galeria6.jpg",
    alt: "Cultivo de pepinos en invernadero automatizado",
    titulo: "Cultivo de Pepinos con Tecnología de Invernadero Inteligente",
    descripcion: "Invernadero automatizado para cultivo de pepinos, con monitoreo en tiempo real para ajustar los parámetros de crecimiento.",
    fecha: "2023-06-17",
    tipoCultivo: "Hortalizas",
    ubicacion: "Invernadero Verde, Zona Norte",
    likes: 180,
    comentarios: 15
  },
  {
    id: 7,
    src: "/galeria7.jpg",
    alt: "Sistemas de control de plagas con sensores",
    titulo: "Control Inteligente de Plagas con Sensores",
    descripcion: "Sistema de control de plagas basado en sensores que detectan la presencia de insectos y activan medidas preventivas automáticamente.",
    fecha: "2023-02-25",
    tipoCultivo: "Flores",
    ubicacion: "Valle del Sol, Región Oeste",
    likes: 220,
    comentarios: 40
  },
  {
    id: 8,
    src: "/galeria8.jpg",
    alt: "Ganadería inteligente con monitoreo en tiempo real",
    titulo: "Ganadería Inteligente con Monitoreo Remoto",
    descripcion: "Sistema de monitoreo en tiempo real para ganado, utilizando sensores para medir la salud y el comportamiento de los animales.",
    fecha: "2023-09-10",
    tipoCultivo: "Ganadería",
    ubicacion: "Finca La Estancia, Región Sur",
    likes: 300,
    comentarios: 50
  },
  {
    id: 9,
    src: "/galeria9.jpg",
    alt: "Cultivo de hortalizas con drones de riego",
    titulo: "Riego de Precisión con Drones para Hortalizas",
    descripcion: "Uso de drones para la aplicación precisa de agua y nutrientes a las hortalizas, minimizando el desperdicio y maximizando la eficiencia.",
    fecha: "2023-11-05",
    tipoCultivo: "Hortalizas",
    ubicacion: "Finca TechGrow, Región Norte",
    likes: 250,
    comentarios: 22
  }, 
  {
    "id": 10,
    "src": "/galeria10.jpg",
    "alt": "Cultivo de arroz con sistema de riego por aspersión",
    "titulo": "Sistema de Riego por Aspersión para Cultivos de Arroz",
    "descripcion": "Implementación de riego por aspersión para optimizar la distribución de agua en grandes campos de arroz, mejorando la calidad y cantidad de la cosecha.",
    "fecha": "2023-10-20",
    "tipoCultivo": "Arroz",
    "ubicacion": "Finca AgroArroz, Región Este",
    "likes": 320,
    "comentarios": 45
  }
  
];

function GaleriaImagenes() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectImage = (imagen) => {
    setImagenSeleccionada(imagen);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const modalContent = imagenSeleccionada && (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{imagenSeleccionada.titulo}</h2>
          <button className="close-btn" onClick={handleCloseModal}>X</button>
        </div>
        <div className="modal-body">
          <img src={imagenSeleccionada.src} alt={imagenSeleccionada.alt} className="modal-image" />
          <div className="modal-info">
            <p>{imagenSeleccionada.descripcion}</p>
            <span><strong>Fecha:</strong> {imagenSeleccionada.fecha}</span>
            <span><strong>Tipo de Cultivo:</strong> {imagenSeleccionada.tipoCultivo}</span>
            <span><strong>Ubicación:</strong> {imagenSeleccionada.ubicacion}</span>
            <div className="modal-actions">
              <button className="btn-action">
                <Heart className="icon" />
                {imagenSeleccionada.likes}
              </button>
              <button className="btn-action">
                <MessageCircle className="icon" />
                {imagenSeleccionada.comentarios}
              </button>
              <button className="btn-action">
                <Share2 className="icon" />
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="GaleriaPage">
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

      <main className="content">
        <section className="gallery-section">
          <h2>Galería de Proyectos y Cultivos</h2>
          <div className="gallery-grid">
            {imagenesGaleria.map((imagen) => (
              <div key={imagen.id} className="gallery-card" onClick={() => handleSelectImage(imagen)}>
                <div className="image-container">
                  <img src={imagen.src} alt={imagen.alt} className="gallery-image" />
                </div>
                <div className="card-info">
                  <h3>{imagen.titulo}</h3>
                  <div className="card-actions">
                    <button className="btn-action">
                      <Heart className="icon" />
                      {imagen.likes}
                    </button>
                    <button className="btn-action">
                      <MessageCircle className="icon" />
                      {imagen.comentarios}
                    </button>
                    <button className="btn-action">
                      <Share2 className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalVisible && modalContent}

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

export default GaleriaImagenes;

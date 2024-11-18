import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { CalendarIcon, MapPin, Video } from 'lucide-react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Swal from 'sweetalert2';
import './eventos.css' 

const eventos = [
  {
    id: 1,
    titulo: "Seminario de Agricultura Sostenible",
    descripcionCorta: "Aprende las últimas técnicas en agricultura sostenible y cómo implementarlas en tu producción.",
    imagen: "/seminario1.jpeg",
    ponente: "Dra. María González",
    fecha: new Date(2024, 2, 15),
    modalidad: "Presencial",
    ubicacion: "Centro de Convenciones SUNSUCA",
    cupos: 50,
    costo: 75,
    agenda: [
      "09:00 - Introducción a la agricultura sostenible",
      "11:00 - Técnicas de conservación del suelo",
      "14:00 - Manejo integrado de plagas",
      "16:00 - Casos de éxito y discusión"
    ]
  },
  {
    id: 2,
    titulo: "Taller de Riego Eficiente",
    descripcionCorta: "Descubre cómo optimizar tus sistemas de riego para ahorrar agua y mejorar la producción.",
    imagen: "/seminario2.jpeg",
    ponente: "Ing. Carlos Ramírez",
    fecha: new Date(2024, 3, 5),
    modalidad: "Presencial",
    ubicacion: "Campo Experimental SUNSUCA",
    cupos: 30,
    costo: 100,
    agenda: [
      "08:30 - Fundamentos de sistemas de riego",
      "10:30 - Tecnologías de riego por goteo",
      "13:30 - Programación y automatización del riego",
      "15:30 - Práctica en campo"
    ]
  },
  {
    id: 3,
    titulo: "Webinar: Innovaciones en Agroecología",
    descripcionCorta: "Conoce las últimas innovaciones en prácticas agroecológicas y cómo pueden beneficiar a tu producción.",
    imagen: "/seminario3.jpeg",
    ponente: "Dr. Juan Pérez",
    fecha: new Date(2024, 3, 20),
    modalidad: "Virtual",
    ubicacion: "Plataforma Zoom",
    cupos: 100,
    costo: 0,
    agenda: [
      "10:00 - Introducción a la agroecología moderna",
      "11:00 - Biodiversidad y control natural de plagas",
      "12:00 - Sistemas agroforestales",
      "13:00 - Sesión de preguntas y respuestas"
    ]
  },
  {
    id: 4,
    titulo: "Curso de Certificación en Agricultura Orgánica",
    descripcionCorta: "Obtén la certificación oficial en prácticas de agricultura orgánica y amplía tus oportunidades de mercado.",
    imagen: "/seminario4.jpeg",
    ponente: "Dra. Laura Martínez",
    fecha: new Date(2024, 4, 10),
    modalidad: "Presencial",
    ubicacion: "Instituto SUNSUCA de Agricultura Sostenible",
    cupos: 25,
    costo: 250,
    agenda: [
      "09:00 - Principios de la agricultura orgánica",
      "11:00 - Manejo de suelos y compostaje",
      "14:00 - Control biológico de plagas",
      "16:00 - Certificación y normativas"
    ]
  },
  {
    id: 5,
    titulo: "Foro: Tecnologías Emergentes en Agricultura",
    descripcionCorta: "Explora las últimas tecnologías que están revolucionando el sector agrícola, desde IA hasta robótica.",
    imagen: "/seminario5.jpeg",
    ponente: "Varios expertos internacionales",
    fecha: new Date(2024, 5, 1),
    modalidad: "Virtual",
    ubicacion: "Centro de Innovación SUNSUCA y transmisión en línea",
    cupos: 200,
    costo: 50,
    agenda: [
      "10:00 - Apertura: El futuro de la agricultura tecnificada",
      "11:30 - Panel: IA y Big Data en la agricultura de precisión",
      "14:00 - Demostración: Drones y robots en el campo",
      "16:00 - Debate: Desafíos éticos de la tecnología agrícola"
    ]
  },
  {
    id: 6,
    titulo: "Conferencia sobre Biofertilizantes",
    descripcionCorta: "Aprende sobre los biofertilizantes y cómo su uso puede mejorar la calidad del suelo.",
    imagen: "/seminario6.jpeg",
    ponente: "Dr. Jorge Fernández",
    fecha: new Date(2024, 6, 10),
    modalidad: "Presencial",
    ubicacion: "Auditorio SUNSUCA",
    cupos: 60,
    costo: 120,
    agenda: [
      "09:00 - Introducción a los biofertilizantes",
      "11:00 - Tipos de biofertilizantes y su aplicación",
      "13:00 - Beneficios de los biofertilizantes para la agricultura",
      "15:00 - Casos prácticos y resultados"
    ]
  },
  {
    id: 7,
    titulo: "Taller de Agricultura de Precisión",
    descripcionCorta: "Domina las herramientas tecnológicas para optimizar la producción agrícola.",
    imagen: "/seminario7.jpeg",
    ponente: "Ing. Alejandro Torres",
    fecha: new Date(2024, 7, 5),
    modalidad: "Virtual",
    ubicacion: "Plataforma Zoom",
    cupos: 150,
    costo: 0,
    agenda: [
      "09:00 - Introducción a la agricultura de precisión",
      "11:00 - Herramientas tecnológicas y su uso",
      "14:00 - Monitoreo y análisis de datos",
      "16:00 - Implementación de la agricultura de precisión"
    ]
  }
]

function Eventos() {
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [filtro, setFiltro] = useState('todos')
  const [inscripcionFormVisible, setInscripcionFormVisible] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: ''
  })
  const [inscripcionExitoso, setInscripcionExitoso] = useState(false)

  const eventosFiltrados = eventos.filter(evento => {
    if (filtro === 'todos') return true
    return evento.modalidad.toLowerCase() === filtro
  })

  const handleSelectEvent = (id) => {
    const evento = eventos.find(ev => ev.id === id)
    setEventoSeleccionado(evento)
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
    setInscripcionFormVisible(false)  // Cerrar también el formulario si es que está abierto
  }

  // Manejar el cambio en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirmando este formulario procederás con la inscripción.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setInscripcionExitoso(true); 
        setInscripcionFormVisible(false);
        setFormData({ nombre: '', email: '', telefono: '' });
        Swal.fire({
          title: '¡Inscripción exitosa!',
          text: '¡Gracias por registrarte!',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  };
  
  // Modal para ver detalles del evento
  const modalContent = eventoSeleccionado && (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-logo">
            <img src="/logo2.png" alt="Logo de la empresa" />
          </div>
          <div className="modal-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
        </div>

        <h2>{eventoSeleccionado.titulo}</h2>
        <p>{eventoSeleccionado.descripcionCorta}</p>
        <div className="event-details">
          <p><strong>Fecha:</strong> {eventoSeleccionado.fecha.toLocaleDateString()}</p>
          <p><strong>Ponente:</strong> {eventoSeleccionado.ponente}</p>
          <p><strong>Modalidad:</strong> {eventoSeleccionado.modalidad}</p>
          <p><strong>Ubicación:</strong> {eventoSeleccionado.ubicacion}</p>
          <p><strong>Cupos disponibles:</strong> {eventoSeleccionado.cupos}</p>
          <p><strong>Costo:</strong> ${eventoSeleccionado.costo}</p>
          <div className="event-agenda">
            <h3>Agenda:</h3>
            <ul>
              {eventoSeleccionado.agenda.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div class="button-container">
          <button className="btn-primary" onClick={() => setInscripcionFormVisible(true)}>
            Inscribirse
          </button>
          <button className="btn-secondary" onClick={handleCloseModal}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )

  // Modal para el formulario de inscripción
  const inscripcionModal = inscripcionFormVisible && (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-logo">
            <img src="/logo2.png" alt="Logo de la empresa" />
          </div>
          <div className="modal-icon">
            <i className="fas fa-leaf"></i>
          </div>
        </div>
        <h3>Formulario de Inscripción</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div class="button-container">
            <button type="submit" class="btn-primary">Enviar</button>
            <button className="btn-secondary" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </form>
        
        
      </div>
    </div>
  )

  return (
    <div className="EventosHome">
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="SUNSUCA Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/servicios" className="nav-link">Servicios</Link></li>
            <li><Link to="/galeria" className="nav-link">Galería</Link></li>
            <li><Link to="/eventos" className="nav-link">Eventos</Link></li>
            <li><Link to="/login" className="btn-login">Iniciar Sesión</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="events-section">
          <h2>Eventos y Capacitación</h2>
          <p>Dale click a cualquiera de nuestros Eventos y Capacitaciónes para ver mas informacion</p>
          
          <div className="filters">
            <button onClick={() => setFiltro('todos')} className={filtro === 'todos' ? 'active' : ''}>Todos</button>
            <button onClick={() => setFiltro('presencial')} className={filtro === 'presencial' ? 'active' : ''}>Presencial</button>
            <button onClick={() => setFiltro('virtual')} className={filtro === 'virtual' ? 'active' : ''}>Virtual</button>
          </div>

          <div className="events-grid">
            {eventosFiltrados.map((evento) => (
              <div key={evento.id} className="event-card" onClick={() => handleSelectEvent(evento.id)}>
                <div className="event-image">
                  <img src={evento.imagen} alt={evento.titulo} />
                </div>
                <div className="event-info">
                  <h3>{evento.titulo}</h3>
                  <p>{evento.descripcionCorta}</p>
                  <div className="event-modalidad">
                    {evento.modalidad === 'Presencial' ? (
                      <MapPin className="w-4 h-4" />
                    ) : (
                      <Video className="w-4 h-4" />
                    )}
                    {evento.modalidad}
                  </div>
                  <div className="event-date">
                    <CalendarIcon className="w-4 h-4" />
                    {evento.fecha.toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mostrar los modales */}
        {modalVisible && ReactDOM.createPortal(modalContent, document.body)}
        {inscripcionFormVisible && ReactDOM.createPortal(inscripcionModal, document.body)}
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
  )
}

export default Eventos

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import Swal from 'sweetalert2'
import './administrador.css' // Asegúrate de tener los estilos adecuados

const Administrador = () => {
  // Estados para Servicios, Eventos y Usuarios
  const [servicios, setServicios] = useState([
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
    }
  ]);

  const [eventos, setEventos] = useState([
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
    }
  ]);

  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Carlos Sánchez",
      correo: "carlos.sanchez@email.com",
      telefono: "+1 234 567 890",
      rol: "Administrador",
    },
    {
      id: 2,
      nombre: "Ana García",
      correo: "ana.garcia@email.com",
      telefono: "+1 987 654 321",
      rol: "Usuario",
    }
  ]);

  const [error, setError] = useState('');

  // Funciones de eliminar
  const handleDeleteServicio = (id) => {
    setServicios(servicios.filter(servicio => servicio.id !== id));
    Swal.fire('Eliminado', 'El servicio ha sido eliminado.', 'success');
  }

  const handleDeleteEvento = (id) => {
    setEventos(eventos.filter(evento => evento.id !== id));
    Swal.fire('Eliminado', 'El evento ha sido eliminado.', 'success');
  }

  const handleDeleteUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    Swal.fire('Eliminado', 'El usuario ha sido eliminado.', 'success');
  }

  // Funciones de guardar cambios (Aquí se pueden agregar lógicas para editar)
  const handleSaveServicio = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Servicio actualizado',
      text: '¡Los cambios se han guardado correctamente!',
    });
    setError('');
  }

  const handleSaveEvento = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Evento actualizado',
      text: '¡Los cambios se han guardado correctamente!',
    });
    setError('');
  }

  return (
    <div className="admin-page">
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="SUNSUCA Logo" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="admin-form-container">
        {/* Tabla de Gestionar Servicios */}
        <section id="servicios" className="admin-section">
        <h2>Gestionar Servicios</h2>
        <table className="admin-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Beneficios</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {servicios.map((servicio) => (
                <tr key={servicio.id}>
                <td>{servicio.id}</td>
                <td>{servicio.nombre}</td>
                <td>{servicio.descripcionCorta}</td>
                <td><img src={servicio.imagen} alt={servicio.nombre} /></td>
                <td>{servicio.beneficios.join(', ')}</td>
                <td>
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </section>

        {/* Tabla de Gestionar Eventos */}
        <section id="eventos" className="admin-section">
        <h2>Gestionar Eventos</h2>
        <table className="admin-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Modalidad</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {eventos.map((evento) => (
                <tr key={evento.id}>
                <td>{evento.id}</td>
                <td>{evento.titulo}</td>
                <td>{evento.descripcionCorta}</td>
                <td>{evento.fecha.toLocaleDateString()}</td>
                <td>{evento.modalidad}</td>
                <td>
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </section>

        {/* Tabla de Gestionar Usuarios */}
        <section id="usuarios" className="admin-section">
        <h2>Gestionar Usuarios</h2>
        <table className="admin-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Rol</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.rol}</td>
                <td>
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
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

export default Administrador;

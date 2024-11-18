import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import Swal from 'sweetalert2'
import './registro.css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    // Simulación de registro usando localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userExists = users.some(u => u.email === email)

    if (userExists) {
      setError('Ya existe una cuenta con este correo electrónico.')
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ya existe una cuenta con este correo electrónico.',
      })
    } else {
      const newUser = { name, email, password }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('currentUser', JSON.stringify(newUser))

      // Mostrar alerta de registro exitoso
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: '¡Bienvenido! a sido registrado exitosamente.',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {

        navigate('/login')
      })

      // Limpiar campos del formulario
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
  }

  return (
    <div className="register-page">
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Logo" />
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

      <main className="forml">
        <section className="register-form-container">
          <h2>Crear Cuenta</h2>
          <p>Regístrese para acceder a nuestros servicios</p>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger">
                <AlertCircle className="icon" />
                <strong>Error</strong>
                <p>{error}</p>
              </div>
            )}

            <button type="submit" className="btn-register">Registrarse</button>
          </form>

          <p className="login-link">
            ¿Ya tiene una cuenta? <Link to="/login" className="link">Inicie sesión aquí</Link>
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="footer-contact">
            <h3>Contacto</h3>
            <ul>
              <li>+1 234 567 890</li>
              <li>info@empresa.com</li>
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
          <p>&copy; 2024 Empresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Register

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './login.css'

const Login = () => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Simulación de autenticación usando localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email && u.password === password)

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      
      // Mostrar alerta de inicio de sesión exitoso
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido!',
        timer: 2000, // 2 segundos antes de redirigir
        showConfirmButton: false,
      }).then(() => {
        navigate('/administrador') // Redirige después de la alerta

        // Limpiar los campos del formulario después de la redirección
        setEmail('')
        setPassword('')
      })
    } else {
      // Mostrar alerta de error de inicio de sesión
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'Credenciales inválidas. Por favor, intente de nuevo.',
      }).then(() => {
        // Limpiar los campos del formulario después de un error
        setEmail('')
        setPassword('')
      })
    }
  }

  return (
    <div className="login-page">
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

        <main className="forml">
            <section className="login-form-container">
            <h2>Iniciar Sesión</h2>
            <p>Ingrese sus credenciales para acceder a su cuenta</p>

            <form onSubmit={handleSubmit} className="login-form">
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

                {error && (
                <div className="alert alert-danger">
                    <AlertCircle className="icon" />
                    <strong>Error</strong>
                    <p>{error}</p>
                </div>
                )}

                <button type="submit" className="btn-login">Iniciar Sesión</button>
            </form>

            <p className="signup-link">
                ¿No tiene una cuenta? <a href="/register" className="link">Regístrese aquí</a>
            </p>
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
  )
}

export default Login

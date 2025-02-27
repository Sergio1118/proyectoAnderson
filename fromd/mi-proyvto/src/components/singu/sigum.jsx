import React, { useState } from 'react';

const Registro = () => {
  // Estado inicial con los nuevos nombres de campos
  const [formData, setFormData] = useState({
    username: '',       // Cambiado de nombreUsuario a username
    email: '',          // Cambiado de correoElectronico a email
    password: '',       // Cambiado de contrasena a password
 
  });

  // Estado para los errores
  const [errors, setErrors] = useState({});

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para validar el formulario
  const validateForm = () => {
    const newErrors = {};

    // Validación del campo username
    if (!formData.username) {
      newErrors.username = 'El nombre de usuario es requerido';
    }

    // Validación del campo email
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    // Validación del campo password
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Enviar los datos al backend Django
        const response = await fetch('http://localhost:8000/app/registro/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Datos del formulario
        });

        const data = await response.json();
        
        if (response.ok) {
          window.location.href = '/login';
        } else {
          console.log('Errores en el formulario:', data);
          setErrors(data); // Mostrar los errores que vienen desde el backend
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    } else {
      console.log('Formulario con errores');
    }
  };

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Regístrate</h2>

        {/* Campo para el nombre de usuario */}
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="username"
            placeholder="Nombre de Usuario"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.username && <span style={styles.error}>{errors.username}</span>}
        </div>

        {/* Campo para el correo electrónico */}
        <div style={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        {/* Campo para la contraseña */}
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>

        {/* Botón para enviar el formulario */}
        <button type="submit" style={styles.submitButton}>Registrarse</button>
      </form>
    </div>
  );
};

// Estilos CSS-in-JS
const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e9ecef',
  },
  form: {
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    marginBottom: '25px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  error: {
    color: '#ff4d4f',
    fontSize: '14px',
    marginTop: '5px',
    display: 'block',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Registro;

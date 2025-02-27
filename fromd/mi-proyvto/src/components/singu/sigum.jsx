// 1. Importa React y el hook `useState` desde la librería 'react'.
import React, { useState } from 'react';

// 2. Define un componente funcional llamado `Registro`.
const Registro = () => {
  // 3. Define el estado `formData` usando el hook `useState`.
  //    Este estado almacena los valores de los campos del formulario.
  const [formData, setFormData] = useState({
    nombreUsuario: '',       // Campo para el nombre de usuario.
    correoElectronico: '',   // Campo para el correo electrónico.
    contrasena: '',          // Campo para la contraseña.
    confirmacionContrasena: '', // Campo para confirmar la contraseña.
  });

  // 4. Define el estado `errors` usando el hook `useState`.
  //    Este estado almacena los mensajes de error de validación.
  const [errors, setErrors] = useState({});

  // 5. Define la función `handleChange` para manejar cambios en los campos del formulario.
  const handleChange = (e) => {
    // 6. Extrae el `name` y `value` del campo que ha cambiado.
    const { name, value } = e.target;

    // 7. Actualiza el estado `formData` con el nuevo valor del campo.
    //    Usa el operador de propagación (`...`) para mantener los otros valores.
    setFormData({ ...formData, [name]: value });
  };

  // 8. Define la función `validateForm` para validar los campos del formulario.
  const validateForm = () => {
    // 9. Crea un objeto vacío `newErrors` para almacenar los errores de validación.
    const newErrors = {};

    // 10. Valida el campo `nombreUsuario`.
    if (!formData.nombreUsuario) {
      newErrors.nombreUsuario = 'El nombre de usuario es requerido';
    }

    // 11. Valida el campo `correoElectronico`.
    if (!formData.correoElectronico) {
      newErrors.correoElectronico = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correoElectronico)) {
      // 12. Valida que el correo electrónico tenga un formato válido.
      newErrors.correoElectronico = 'El correo electrónico no es válido';
    }

    // 13. Valida el campo `contrasena`.
    if (!formData.contrasena) {
      newErrors.contrasena = 'La contraseña es requerida';
    } else if (formData.contrasena.length < 6) {
      // 14. Valida que la contraseña tenga al menos 6 caracteres.
      newErrors.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    // 15. Valida el campo `confirmacionContrasena`.
    if (!formData.confirmacionContrasena) {
      newErrors.confirmacionContrasena = 'La confirmación de contraseña es requerida';
    } else if (formData.confirmacionContrasena !== formData.contrasena) {
      // 16. Valida que la confirmación de contraseña coincida con la contraseña.
      newErrors.confirmacionContrasena = 'Las contraseñas no coinciden';
    }

    // 17. Actualiza el estado `errors` con los errores encontrados.
    setErrors(newErrors);

    // 18. Retorna `true` si no hay errores, o `false` si hay errores.
    return Object.keys(newErrors).length === 0;
  };

  // 19. Define la función `handleSubmit` para manejar el envío del formulario.
  const handleSubmit = (e) => {
    // 20. Previene el comportamiento por defecto del formulario (recargar la página).
    e.preventDefault();

    // 21. Valida el formulario antes de enviarlo.
    if (validateForm()) {
      // 22. Si no hay errores, imprime los datos del formulario en la consola.
      console.log('Formulario enviado:', formData);
    } else {
      // 23. Si hay errores, imprime un mensaje en la consola.
      console.log('Formulario con errores');
    }
  };

  // 24. Retorna el JSX que representa el formulario.
  return (
    <div style={styles.formContainer}>
      {/* 25. Define el formulario y asocia la función `handleSubmit` al evento `onSubmit`. */}
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* 26. Título del formulario. */}
        <h2 style={styles.title}>Regístrate</h2>

        {/* 27. Grupo de entrada para el nombre de usuario. */}
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="nombreUsuario"
            placeholder="Nombre de Usuario"
            value={formData.nombreUsuario}
            onChange={handleChange}
            style={styles.input}
          />
          {/* 28. Muestra el mensaje de error si existe. */}
          {errors.nombreUsuario && <span style={styles.error}>{errors.nombreUsuario}</span>}
        </div>

        {/* 29. Grupo de entrada para el correo electrónico. */}
        <div style={styles.inputGroup}>
          <input
            type="email"
            name="correoElectronico"
            placeholder="Correo Electrónico"
            value={formData.correoElectronico}
            onChange={handleChange}
            style={styles.input}
          />
          {/* 30. Muestra el mensaje de error si existe. */}
          {errors.correoElectronico && <span style={styles.error}>{errors.correoElectronico}</span>}
        </div>

        {/* 31. Grupo de entrada para la contraseña. */}
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={formData.contrasena}
            onChange={handleChange}
            style={styles.input}
          />
          {/* 32. Muestra el mensaje de error si existe. */}
          {errors.contrasena && <span style={styles.error}>{errors.contrasena}</span>}
        </div>

        {/* 33. Grupo de entrada para la confirmación de contraseña. */}
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="confirmacionContrasena"
            placeholder="Confirmar Contraseña"
            value={formData.confirmacionContrasena}
            onChange={handleChange}
            style={styles.input}
          />
          {/* 34. Muestra el mensaje de error si existe. */}
          {errors.confirmacionContrasena && <span style={styles.error}>{errors.confirmacionContrasena}</span>}
        </div>

        {/* 35. Botón para enviar el formulario. */}
        <button type="submit" style={styles.submitButton}>Registrarse</button>
      </form>
    </div>
  );
};

// 36. Define un objeto `styles` que contiene los estilos CSS-in-JS.
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

// 37. Exporta el componente `Registro` como el valor por defecto del módulo.
export default Registro;
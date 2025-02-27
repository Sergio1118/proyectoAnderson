import { useState } from "react";
import { useHistory } from "react-router-dom"; // Para redirigir a otra página

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null); // Para manejar posibles errores
  const history = useHistory(); // Usamos useHistory para redirigir después de un login exitoso

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para validar el formulario
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("El correo electrónico no es válido.");
      return false;
    }
    setError(null); // Limpiar el error si la validación es exitosa
    return true;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Enviar los datos al backend Django
        const response = await fetch("http://127.0.0.1:8000/login/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Datos del formulario
        });

        const data = await response.json();

        if (response.ok) {
          // Redirigir a la página deseada después de un login exitoso
          history.push("/registro"); // Cambia '/dashboard' por la ruta que desees
        } else {
          // Mostrar errores que vienen desde el backend
          setError(data.error || "Error en el inicio de sesión.");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        setError("Hubo un problema al conectar con el servidor.");
      }
    }
  };

  // Estilos CSS-in-JS
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f3f4f6",
    },
    formWrapper: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "24rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    inputGroup: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "1rem",
    },
    label: {
      color: "#4b5563",
      textAlign: "center",
      marginBottom: "0.5rem",
    },
    input: {
      width: "75%",
      padding: "0.5rem",
      marginTop: "0.5rem",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      textAlign: "center",
      outline: "none",
      backgroundColor: "#fff",
      color: "#000",
    },
    button: {
      width: "75%",
      backgroundColor: "#3b82f6",
      color: "#fff",
      padding: "0.75rem",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s",
      border: "none",
      marginTop: "1rem",
    },
    errorMessage: {
      color: "red",
      textAlign: "center",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Iniciar Sesión
          </button>
        </form>
        {error && <div style={styles.errorMessage}>{error}</div>}
      </div>
    </div>
  );
}

export default Login;
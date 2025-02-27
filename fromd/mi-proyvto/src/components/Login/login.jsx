import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

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
      backgroundColor: "#fff", // Fondo blanco
      color: "#000", // Texto negro
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
    buttonHover: {
      backgroundColor: "#2563eb",
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
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

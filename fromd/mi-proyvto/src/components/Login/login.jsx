


function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const [errors, setErrors] = useState({});
      const [showPassword, setShowPassword] = useState(false); // Estado para la visibilidad de la contraseña
      const navigate = useNavigate();
    
      const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isValidPassword = (password) => password.length >= 6;
    
      const handleValidations = async () => {
        const formErrors = {};
        const { email, password } = formData;
    
        if (!email) formErrors.email = "El correo electrónico es obligatorio.";
        else if (!isValidEmail(email)) formErrors.email = "Correo electrónico no válido.";
    
        if (!password) formErrors.password = "La contraseña es obligatoria.";
        else if (!isValidPassword(password)) formErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    
        setErrors(formErrors);
    
        if (Object.keys(formErrors).length === 0) {
          // Si no hay errores, hacer la petición de inicio de sesión
          try {
            const response = await fetch("http://localhost:8000/login/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: formData.email,
                password: formData.password,
              }),
            });
    
            const data = await response.json();
    
            if (response.ok && data.success) {
              alert("Inicio de sesión exitoso.");
              setFormData({ email: "", password: "" });
              // Redirigir según el role del usuario
              navigate(data.redirect_url); // Se espera que el backend envíe la URL de redirección
            } else {
              alert(data.message || "Error al iniciar sesión.");
            }
          } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            alert("Error al realizar la solicitud. Intenta de nuevo.");
          }
        }
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    
        // Eliminar el mensaje de error cuando el usuario comience a escribir
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      };
    
      const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); // Alterna el estado de visibilidad de la contraseña
      };
    
}
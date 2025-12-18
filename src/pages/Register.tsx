import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// renombramos la funcion de servicio para evitar conflicto con la funcion del hook
import { register as registerService } from "../services/AuthService";
import { useAuth } from "../context/AuthContext";
import "./Register.css";

// React.FC es un tipo de componente que recibe props y los retorna JSX, navigate es una funcion que permite redirigir a otra ruta, y useNavigate y useState son hooks de React
//los hooks son funciones que permiten usar el estado y el ciclo de vida de los componentes
const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // obtener la funcion login
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // 1. Llamada al servicio de backend para registro
      const result = await registerService({ name, email, password });

      // actualiza el estado global con el token
      login(result.token);

      setSuccess("Registro exitoso. ¡Redirigiendo!");

      // redirigir al Home tras un breve retraso
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err: any) {
      // setError es una funcion que actualiza el estado de error
      setError(err.message || "Error desconocido durante el registro.");
    }
  };

  // usamos return para renderizar el formulario
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>REGISTRO DE USUARIO</h2>

        <form onSubmit={handleSubmit}>
          {error && (
            <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>
          )}
          {success && (
            <p style={{ color: "green", marginBottom: "15px" }}>{success}</p>
          )}

          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            REGISTRARSE
          </button>
        </form>

        <p className="alt-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

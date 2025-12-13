// src/pages/Register.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Renombramos la función de servicio para evitar conflicto con la función del hook
import { register as registerService } from "../services/AuthService";
import { useAuth } from "../context/AuthContext"; // 🚨 IMPORTACIÓN CRÍTICA
import "./Register.css";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // 🚨 OBTENER LA FUNCIÓN LOGIN DEL CONTEXTO
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // 1. Llamada al servicio de backend para registro
      const result = await registerService({ name, email, password });

      // 🚨 2. Actualiza el estado global (Contexto) con el token
      login(result.token);

      setSuccess("Registro exitoso. ¡Redirigiendo!");

      // 3. Redirigir al Home tras un breve retraso
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Error desconocido durante el registro.");
    }
  };

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

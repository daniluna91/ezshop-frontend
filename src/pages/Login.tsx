import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginService } from "../services/AuthService";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // llamada al backend para iniciar sesion
      const result = await loginService({ email, password });

      // actualiza el estado global (Contexto) con el token
      login(result.token);

      // te lleva al home si te logueas
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Error desconocido. Revisa tu conexión.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>INICIO DE SESIÓN</h2>

        <form onSubmit={handleSubmit}>
          {error && (
            <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>
          )}

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
            INICIAR SESIÓN
          </button>
        </form>

        <p className="alt-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

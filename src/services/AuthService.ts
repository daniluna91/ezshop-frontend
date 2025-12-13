// src/services/AuthService.ts

import axios from "axios";

// 🚨 Define la URL base de tu backend (AJUSTA ESTO a tu puerto y ruta reales)
const API_BASE_URL = "http://localhost:5000/api/auth";

interface AuthResponse {
  token: string;
  message: string;
  // Puedes añadir datos del usuario aquí, como id o nombre
}

interface UserCredentials {
  email: string;
  password: string;
}

interface RegisterData extends UserCredentials {
  name: string;
}

export const login = async (
  credentials: UserCredentials
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_BASE_URL}/login`,
      credentials
    );

    // Guardar el token para futuras peticiones (Protección de rutas)
    localStorage.setItem("authToken", response.data.token);

    return response.data;
  } catch (error: any) {
    // Devolvemos el mensaje de error del servidor
    throw new Error(
      error.response?.data?.message ||
        "Fallo de conexión o credenciales incorrectas."
    );
  }
};

export const register = async (
  userData: RegisterData
): Promise<AuthResponse> => {
  try {
    // 🚨 Ajusta la ruta a tu endpoint de registro si es diferente
    const response = await axios.post<AuthResponse>(
      `${API_BASE_URL}/register`,
      userData
    );

    // Asumo que el registro también devuelve un token para iniciar sesión
    localStorage.setItem("authToken", response.data.token);

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        "Fallo de conexión o el usuario ya existe."
    );
  }
};

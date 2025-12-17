import axios from "axios";

// url del backend
const API_BASE_URL = "http://localhost:5000/api/auth";

interface AuthResponse {
  token: string;
  message: string;
  // añadir el user aqui
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

    // guarda el token en el local storage
    localStorage.setItem("authToken", response.data.token);

    return response.data;
  } catch (error: any) {
    // si no estás registrado o metes mal tus datos en el login
    throw new Error(error.response?.data?.message || "Ha Habido un Problema");
  }
};

export const register = async (
  userData: RegisterData
): Promise<AuthResponse> => {
  try {
    // ajusta la ruta de el endpoint de registro si es diferente
    const response = await axios.post<AuthResponse>(
      `${API_BASE_URL}/register`,
      userData
    );

    // asume que el registro tambien devuelve un token para iniciar sesion
    localStorage.setItem("authToken", response.data.token);

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        "Fallo de conexión o el usuario ya existe."
    );
  }
};

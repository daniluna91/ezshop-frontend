# EZSHOP: Cliente Frontend (React + TypeScript + Vite)

Este repositorio contiene el código fuente del cliente _frontend_ para el proyecto EZSHOP, una aplicación de comercio electrónico moderna.

El proyecto está desarrollado utilizando **React** con **TypeScript** y gestionado por la herramienta de _build_ **Vite**, asegurando un desarrollo rápido y una alta eficiencia.

## Filosofía y Evolución del Proyecto

Este proyecto se caracteriza por haber evolucionado significativamente desde su concepción inicial para garantizar la mejor experiencia de desarrollo y rendimiento.

### Decisión Crítica: Migración de Angular a React/Vite

El proyecto se inició originalmente bajo la estructura y el framework de **Angular**. Sin embargo, se tomó la decisión de pivotar hacia **React con Vite** por las siguientes razones clave:

1.  **Velocidad de Desarrollo (Vite):** Vite ofrece un arranque instantáneo del servidor de desarrollo y recargas ultrarrápidas, mejorando significativamente la productividad.
2.  **Rendimiento del Build:** React con Vite genera _bundles_ más ligeros y optimizados para producción.
3.  **Simplicidad y Alcance:** Para el alcance del proyecto (una _Single Page Application_ con gestión de estado), React ofreció una arquitectura más directa.

Esta migración se completó con éxito, resultando en la estructura de código TypeScript actual.

## Características Implementadas

El frontend de EZSHOP implementa todas las funcionalidades esenciales de un _e-commerce_ moderno:

### Interfaz y Navegación

- **Diseño Responsivo:** Interfaz optimizada para escritorio y dispositivos móviles.
- **Navegación Limpia:** Navbar funcional con enlaces de categoría.
- **Iconografía Profesional:** Integración de iconos SVG mediante la librería `react-icons` para los enlaces sociales.
- **Estructura Completa:** Uso de un componente `Layout` unificado que garantiza la presencia del **Navbar** (sin el icono de búsqueda) y el **Footer** con secciones legales en todas las rutas principales.

### Gestión de Carrito (Context API)

- **`CartContext`:** Implementación de un _Context_ de React para gestionar el estado global del carrito.
- **Contador Dinámico:** Contador visible en el Navbar que actualiza el número de artículos en tiempo real.

### Autenticación (Context API y Axios)

- **`AuthContext`:** Gestión del estado de sesión (`isLoggedIn`) y funciones `login`/`logout` a nivel de aplicación.
- **Conexión Backend:** Comunicación con el servidor API REST en el puerto `5000` (`http://localhost:5000/api/auth`).
- **Seguridad y Conexión:** Solución de problemas de conexión (`ERR_CONNECTION_REFUSED`) y habilitación de **CORS** para asegurar el correcto flujo de autenticación.
- **Botones Condicionales:** El Navbar muestra **LOGIN** o **SALIR** (`logout`) basado en el estado de autenticación.

## Stack Tecnológico

- **Framework:** React (v18+)
- **Lenguaje:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Peticiones HTTP:** Axios
- **Gestión de Estado:** React Context API
- **Iconos:** `react-icons`

## Instalación y Ejecución

Para levantar el proyecto en tu entorno local:

### Requisitos

- Node.js (LTS recomendado)
- El **Backend de EZSHOP** (debe estar ejecutándose en `http://localhost:5000/`).

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/](https://github.com/)[TU_USUARIO]/ezshop-frontend.git
    cd ezshop-frontend
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar el proyecto:**
    ```bash
    npm run dev
    ```

El cliente estará disponible en tu navegador, generalmente en `http://localhost:5173`.

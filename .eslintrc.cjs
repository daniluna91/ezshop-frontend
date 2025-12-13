// .eslintrc.cjs

module.exports = {
  // Configuración de ESLint para un proyecto React/Vite
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended", // Incluimos las reglas de React
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react"],
  rules: {
    // 🚨 LA SOLUCIÓN DEFINITIVA: Desactivar la regla que pide importar React
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "@typescript-eslint/no-explicit-any": "off", // Opcional: Para trabajar rápido con 'any'
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

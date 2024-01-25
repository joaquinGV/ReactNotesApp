---

# Requisitos de Ejecución para la Aplicación

Este archivo describe todas las herramientas, versiones de motores, tiempo de ejecución, etc., necesarios para ejecutar la aplicación correctamente.

## Backend

El backend de la aplicación requiere las siguientes herramientas y versiones:

- **Node.js**: v21.6.0
- **npm**: v10.2.4
- **cors**: v2.8.5,
- **dotenv**: v16.4.0,
- **express**: v4.18.2,
- **mongoose**: v8.1.0,
- **morgan**: "v1.10.0"



Además, las dependencias específicas del proyecto están listadas en el archivo `package.json` del backend. Puedes instalar estas dependencias ejecutando el siguiente comando en el directorio del backend:

```bash
cd backend
npm install
```

## Frontend

El frontend de la aplicación requiere las siguientes herramientas y versiones:

- **Node.js**: v21.6.0
- **npm**: v10.2.4
- **vite**: v5.0.8
- **react**: v18.2.0
- **react-dom**: v18.2.0,
- **styled-components**: v6.1.8

Además, las dependencias específicas del proyecto están listadas en el archivo `package.json` del frontend. Puedes instalar estas dependencias ejecutando el siguiente comando en el directorio del frontend:

```bash
cd frontend
npm install
```

## Iniciar la Aplicación

Para iniciar la aplicación y ejecutar tanto el backend como el frontend simultáneamente, puedes utilizar el script `start_app.sh`. Asegúrate de tener permisos de ejecución para el script. Puedes ejecutarlo con el siguiente comando:

```bash
./start_app.sh
```

Este script instalará las dependencias necesarias para el backend y el frontend, y luego iniciará ambos componentes de la aplicación.

---

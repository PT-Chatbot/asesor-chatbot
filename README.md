# Asesor Chatbot

## Descripción

Asesor Chatbot es un proyecto diseñado para construir un chatbot de inteligencia artificial seguro y escalable, utilizando el stack MERN (MongoDB, Express, React, Node) y autenticación avanzada. Este proyecto es un clon de ChatGPT, desarrollado para ofrecer asesorías a estudiantes universitarios.

## Funcionalidades

- **Sistema de Autenticación y Autorización de Usuarios:** Un robusto sistema para gestionar usuarios de manera eficiente y segura.
- **Validación de Datos con `express-validators`:** Middleware avanzado que asegura la integridad de los datos.
- **Almacenamiento de Chats en MongoDB:** Gestión eficiente y segura de las conversaciones de los usuarios.
- **Generación de un Sistema de Autenticación Propio:** Un sistema de autenticación personalizado y altamente seguro.
- **Uso de Tokens de Autorización JWT y Cookies HTTP Only:** Tecnología moderna para asegurar las sesiones de usuario.
- **Protección de Rutas de Usuario:** Verificaciones avanzadas para garantizar que solo usuarios autorizados accedan a rutas específicas.
- **Aplicación Moderna de React con Vite:** Un entorno de desarrollo rápido y moderno para una mejor experiencia de usuario.
- **Interfaz de Chat Atractiva con Material UI:** Una experiencia de usuario agradable y visualmente atractiva.
- **Diseño Completamente Responsivo:** Asegura una funcionalidad perfecta en todos los dispositivos.
- **Diseño Moderno:** Apariencia actualizada y profesional.
- **Integración de OpenAI con Node y Express:** Potencia tu aplicación MERN con la inteligencia de OpenAI.
- **Clon Completo de ChatGPT:** Una réplica funcional de ChatGPT para asesorías de estudiantes.
- **Almacenamiento de Sesiones de Usuario:** Gestión segura y eficiente de las sesiones de usuario.

## Capturas de Pantalla

### Interfaz del Chat

![Chat](./src/images/screenshots/AsesorChatbot-Chat.png)

### Pantalla de Inicio de Sesión

![Login](./src/images/screenshots/AsesorChatbot-Login.png)

### Panel de Administración

![Admin](./src/images/screenshots/AsesorChatbot-Admin.png)

## Prerrequisitos

Antes de iniciar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

Puedes verificar las instalaciones con los siguientes comandos:

```bash
node --version
npm --version
git --version
```

Asegúrate de establecer las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

```env
OPEN_AI_SECRET=YOUR_API_KEY
OPEN_AI_ORGANIZATION_ID=YOUR_ID
MONGODB_URL=YOUR_URL
JWT_SECRET=YOUR_SECRET
COOKIE_SECRET=YOUR_SECRET
PORT=5000
```

## Comenzando

### Instalación

Para desplegar el proyecto en tu entorno local para desarrollo y pruebas, sigue estos pasos:

1. Clona el repositorio:

```bash
https://github.com/PT-Chatbot/asesor-chatbot.git
```

2. Navega al directorio del proyecto:

```bash
cd asesor-chatbot/backend
```

&

```bash
cd asesor-chatbot/frontend
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre `http://localhost:5173` en tu navegador para ver la aplicación.

## Herramientas Utilizadas

- [React](https://reactjs.org/)
- [Material UI V5](https://mui.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [OpenAI](https://openai.com/)
- [JWT](https://jwt.io/)

## Contribuir

Las contribuciones son bienvenidas y ayudan a mejorar y expandir este proyecto. Si deseas contribuir, puedes seguir estos pasos:

1. **Fork** el repositorio.
2. Crea tu **Feature Branch** (`git checkout -b feature/AmazingFeature`).
3. Haz tus **cambios** en el código.
4. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`).
5. **Push** a la rama (`git push origin feature/AmazingFeature`).
6. Abre un **Pull Request**.

## Contacto

- **Nombre**: Marcos Damián Pool Canul
- **Correo Electrónico**: <damian.marcospool@gmail.com>
- **GitHub**: [marcosd59](https://github.com/marcosd59)

---

© 2024 Marcos Damián Pool Canul.

```bash
git clone https://github.com/marcosd59/asesor-chatbot.git
```

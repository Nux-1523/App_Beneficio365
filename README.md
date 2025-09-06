# Beneficio365 – Plataforma Web para Donación y Reutilización de Alimentos

**Equipo de desarrollo:** Paola Vásquez 
**Módulo:** Bootcamp de Programación – IV DevOps
**Fecha de inicio:** 19 de agosto de 2025  

---

## 📌 Descripción General  

Beneficio365 es una **aplicación web** diseñada para reducir el desperdicio de alimentos mediante un espacio digital donde **donantes** (restaurantes, supermercados, familias) pueden publicar productos aptos para consumo y **beneficiarios** (familias o instituciones) puedan solicitarlos.  

La plataforma promueve la **solidaridad comunitaria** y la **conciencia ambiental**, conectando a quienes tienen excedentes con quienes más lo necesitan.  

---

## 🛠️ Tecnologías Utilizadas  

- **Frontend:** React  
- **Backend:** Node.js (con Express)  
- **Base de datos:** MongoDB Atlas  
- **Autenticación:** JWT u otro sistema de validación segura  
- **Entorno de desarrollo:** Visual Studio Code  
- **Control de versiones:** GitHub  
- **Servicios adicionales:** Firebase, API externas, servicio de correo/notificaciones  

---

## ⚙️ Instrucciones para Ejecutar Localmente  

1. **Clonar el repositorio**  
   ```bash
   git clone <URL-del-repositorio>
   cd beneficio365
   ```  

2. **Instalar dependencias**  
   - Para el backend:  
     ```bash
     cd backend
     npm install
     ```  
   - Para el frontend:  
     ```bash
     cd frontend
     npm install
     ```  

3. **Configurar variables de entorno (.env)**  
   ```env
   DB_URI=<cadena-conexion-MySQL/PostgreSQL>
   PORT=5000
   JWT_SECRET=<clave-secreta>
   ```  

4. **Ejecutar la aplicación**  
   - Iniciar backend:  
     ```bash
     npm run server
     ```  
   - Iniciar frontend:  
     ```bash
     npm start
     ```  

---

## 🌐 Proceso de Despliegue  

El despliegue seguirá un modelo **frontend-backend desacoplado**:  

- **Frontend:** Se construirá con `npm run build` y será desplegado como aplicación estática en plataformas como **Vercel** o **Netlify**.  
- **Backend:** Se implementará como servicio web en **Render** o **Railway**, configurando las variables de entorno y conexión a la base de datos.  
- **Base de datos:** Se utilizará un servicio gestionado en la nube (ej. Railway, Supabase o ElephantSQL para PostgreSQL).  

🔗 El enlace a la aplicación se compartirá al finalizar el despliegue.  

---

## 🚀 Planificación Inicial (Sprints)  

### Sprint 1 – Diseño y Base de la Aplicación  
- Configuración de arquitectura (React + Node.js).  
- Integración inicial con base de datos.  
- Sistema de registro y login con autenticación JWT.  
- UI/UX básica para registro e inicio de sesión.  

### Sprint 2 – Gestión de Donaciones y Funcionalidad Básica  
- CRUD de donaciones (crear, editar, eliminar).  
- Validación de publicaciones (nombre, cantidad, caducidad, ubicación).  
- Visualización en tiempo real de donaciones activas.  
- Solicitud de alimentos por beneficiarios.  

### Sprint 3 – Notificaciones y Confirmaciones  
- Notificaciones por correo/push.  
- Confirmación de entrega de donaciones.  
- Estados de solicitudes (pendiente, entregada, rechazada).  
- Sistema de feedback entre usuarios.  
- Pruebas piloto y mejora de usabilidad.  

---

## 🧩 Funcionalidades Clave (MVP)  

- Registro y autenticación de usuarios (donantes/beneficiarios).  
- Publicación de alimentos con información esencial.  
- Listado en tiempo real de donaciones disponibles.  
- Solicitud y confirmación básica de donaciones.  

---

## ⚡ Desafíos y Soluciones  

- **Gestión de autenticación segura:** Se solucionará con JWT y validaciones en backend.  
- **Sin presupuesto fijo:** Uso de herramientas gratuitas (VS Code, GitHub, Firebase, Render).  
- **Tiempo limitado (bootcamp):** Se priorizará un **MVP funcional** sobre características avanzadas.  

---

## ✅ Conclusión  

Beneficio365 se plantea como una **solución tecnológica de impacto social**, enfocada en:  
- **Reducir el desperdicio de alimentos.**  
- **Promover la solidaridad en la comunidad.**  
- **Garantizar seguridad, transparencia y accesibilidad.**  

Este documento establece la base técnica y organizativa para llevar a cabo el proyecto con éxito, priorizando el aprendizaje, la escalabilidad y la entrega de valor a los usuarios finales.  

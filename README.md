# 365BieneficiO – Aplicación Web para Donaciones de Alimentos  

**Equipo de desarrollo:** Alexandra Paola Vásquez 
**Módulo:** Bootcamp de Programación – IV DevOps
 

---

## 📌 Descripción General  

365BieneficiO es una **aplicación web** diseñada para reducir el desperdicio de alimentos mediante un espacio digital donde **donantes** (restaurantes, supermercados, familias) pueden publicar productos aptos para consumo y **beneficiarios** (organizaciones) que se encuentren en la necesidad de solicitarlos.  

La plataforma promueve la **solidaridad comunitaria** y la **conciencia ambiental**, conectando a quienes tienen excedentes con quienes más lo necesitan.  

---

## 🛠️ Tecnologías Utilizadas  

- **Frontend:** React  
- **Backend:** Node.js - Express
- **Base de datos:** MongoDB Compass 
- **Entorno de desarrollo:** Visual Studio Code  
- **Control de versiones:** GitHub
- **Testeo de Colecciones**: Postman 

---

## ⚙️ Instrucciones para Ejecutar Localmente  

1. **Clonar el repositorio**  
   ```bash
   git clone <URL-del-repositorio>
   cd 365BieneficiO
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
PORT = 8000
MONGO URL = "mongodb://localhost:27017/Beneficio365"
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

- **Frontend:** Se construirá con `npm run build` y será desplegado como aplicación estática en plataformas como **Render**. 
- **Backend:** Se implementará como servicio web en **Render**, configurando las variables de entorno y conexión a la base de datos.  
- **Base de datos:** Se utilizará un servicio de **MongoDB Compass**.  

🔗 El enlace a la aplicación se compartirá al finalizar el despliegue.  

---

## 🚀 Planificación Inicial (Sprints)  

### Sprint 1 – Diseño y Base de la Aplicación  
- Configuración de arquitectura (React + Node.js).  
- Integración inicial con base de datos. 

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

## ⚡ Desafíos y Soluciones  

- **Sin presupuesto fijo:** Uso de herramientas gratuitas (VS Code, GitHub, Firebase, Render).  
- **Tiempo limitado (bootcamp):** Se priorizará un **MVP funcional** sobre características avanzadas.  

---

## ✅ Conclusión  

B365BieneficiO se plantea como una **solución tecnológica de impacto social**, enfocada en:  
- **Reducir el desperdicio de alimentos.**  
- **Promover la solidaridad en la comunidad.**  
- **Garantizar seguridad, transparencia y accesibilidad.**  

Este documento establece la base técnica y organizativa para llevar a cabo el proyecto con éxito, priorizando el aprendizaje, la escalabilidad y la entrega de valor a los usuarios finales.  

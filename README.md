# VeciRed 🏘️

Plataforma web que conecta vecinos con prestadores de servicios informales en las comunas de Medellín. Permite a vecinos encontrar electricistas, plomeros, pintores y más en su zona, y a prestadores ofrecer sus servicios con calificaciones verificadas.

## 🚀 Aplicación en Producción

- **Frontend:** https://veci-red.vercel.app
- **Backend API:** https://vecired-backend.onrender.com

---

## 🛠️ Tecnologías Utilizadas

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + Vite |
| Backend | Node.js + Express 5 |
| Base de datos | PostgreSQL 18 |
| Autenticación | JWT (jsonwebtoken) |
| Almacenamiento imágenes | Cloudinary |
| Despliegue Frontend | Vercel |
| Despliegue Backend | Render |
| Pruebas | Jest + Supertest |
| CI/CD | GitHub Actions |

---

## 🏗️ Arquitectura General

┌─────────────────┐     HTTPS      ┌─────────────────┐
│   Frontend      │ ─────────────► │   Backend API   │
│  React + Vite   │                │  Node + Express │
│  (Vercel)       │                │  (Render)       │
└─────────────────┘                └────────┬────────┘
│
▼
┌─────────────────┐
│   PostgreSQL    │
│   (Render)      │
└─────────────────┘
**Flujo:**
1. El usuario accede al frontend en Vercel
2. El frontend hace peticiones REST al backend en Render
3. El backend valida JWT y consulta PostgreSQL
4. Las imágenes se almacenan en Cloudinary

---

## 📦 Instalación Local

### Prerrequisitos
- Node.js >= 18
- PostgreSQL >= 14
- Git

### 1. Clonar el repositorio

```bash
git clone https://github.com/Celeste-tech/VeciRed.git
cd VeciRed
```

### 2. Configurar el Backend

```bash
cd backend
npm install
```

Crea el archivo `.env` en `backend/`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vecired
DB_USER=postgres
DB_PASSWORD=tu_password
JWT_SECRET=vecired_secret_key_2026
PORT=3000
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

Crea la base de datos y ejecuta el script SQL:

```bash
psql -U postgres -c "CREATE DATABASE vecired;"
psql -U postgres -d vecired -f vecired_database.sql
```

Inicia el backend:

```bash
npm start
```

### 3. Configurar el Frontend

```bash
cd frontend
npm install
```

Crea el archivo `.env` en `frontend/`:

```env
VITE_API_URL=http://localhost:3000/api
```

Inicia el frontend:

```bash
npm run dev
```

### 4. Ejecución con Docker (opcional)

```bash
docker-compose up
```

---

## 🔌 API Endpoints

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/registro` | Registro de usuario | No |
| POST | `/api/auth/login` | Login y obtención de JWT | No |
| GET | `/api/perfiles/mi-perfil` | Ver perfil del prestador | Sí |
| POST | `/api/perfiles/mi-perfil` | Crear perfil prestador | Sí |
| PUT | `/api/perfiles/mi-perfil` | Actualizar perfil | Sí |
| GET | `/api/perfiles/buscar` | Buscar prestadores | No |
| GET | `/api/perfiles/:id` | Ver perfil público | No |
| POST | `/api/perfiles/:id/calificar` | Calificar prestador | Sí |
| GET | `/api/admin/usuarios` | Listar usuarios | Admin |
| PUT | `/api/admin/usuarios/:id/suspender` | Suspender usuario | Admin |

---

## 🧪 Pruebas

```bash
cd backend
npm test
```

Genera reporte de coverage en `backend/coverage/`.

---

## 🔄 CI/CD

El pipeline de GitHub Actions se ejecuta automáticamente en cada push a `main` o `develop`:

1. ✅ Instala dependencias del backend
2. ✅ Ejecuta pruebas unitarias con Jest
3. ✅ Instala dependencias del frontend
4. ✅ Build del frontend con Vite

---

## 👥 Equipo

- Juan Guillermo Sánchez Restrepo
- Daisy Nicol Malagón Ramírez
- Luz Celeste Rodríguez Cabarcas
- Angela Marcela Salazar Peña

**Docente:** Tatiana Lizbeth Cabrera Vargas  
**Institución:** Corporación Universitaria Iberoamericana  
**Proyecto:** Software Engineering - 2026
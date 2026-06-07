import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Busqueda from './pages/Busqueda';
import PerfilPublico from './pages/PerfilPublico';
import AdminPanel from './pages/AdminPanel';

// Ruta protegida por rol
const RutaProtegida = ({ children, roles }) => {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/" />;
  if (roles && !roles.includes(usuario.rol)) return <Navigate to="/home" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/perfil/:id" element={<PerfilPublico />} />
          <Route path="/dashboard" element={
            <RutaProtegida roles={['prestador']}>
              <Dashboard />
            </RutaProtegida>
          } />
          <Route path="/admin" element={
            <RutaProtegida roles={['administrador']}>
              <AdminPanel />
            </RutaProtegida>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <h2 style={styles.logo}>VeciRed</h2>
        <div>
          <span style={styles.bienvenida}>Hola, {usuario?.nombre}</span>
          <button style={styles.botonLogout} onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
      <div style={styles.contenido}>
        <h1 style={styles.titulo}>Encuentra servicios en tu barrio</h1>
        <p style={styles.subtitulo}>Conecta con prestadores de confianza en tu comunidad</p>
        <div style={styles.cards}>
          <div style={styles.card}>⚡ Electricidad</div>
          <div style={styles.card}>🔧 Plomería</div>
          <div style={styles.card}>🎨 Pintura</div>
          <div style={styles.card}>🪵 Carpintería</div>
          <div style={styles.card}>🌿 Jardinería</div>
          <div style={styles.card}>🧵 Costura</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#f0f4f8' },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#2d6a4f', padding: '1rem 2rem' },
  logo: { color: 'white', margin: 0 },
  bienvenida: { color: 'white', marginRight: '1rem' },
  botonLogout: { padding: '0.5rem 1rem', backgroundColor: 'white', color: '#2d6a4f', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  contenido: { padding: '3rem 2rem', textAlign: 'center' },
  titulo: { color: '#2d6a4f', fontSize: '2rem' },
  subtitulo: { color: '#666', marginBottom: '2rem' },
  cards: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' },
  card: { backgroundColor: 'white', padding: '1.5rem 2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', fontSize: '1.1rem', cursor: 'pointer' },
};
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Registro() {
  const [form, setForm] = useState({ nombre: '', correo: '', contrasena: '', rol: 'vecino' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/registro', form);
      navigate('/');
    } catch (err) {
      setError('Error al registrarse. El correo puede estar en uso.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.titulo}>VeciRed</h1>
        <p style={styles.subtitulo}>Crea tu cuenta</p>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input style={styles.input} name="nombre" placeholder="Nombre completo" onChange={handleChange} required />
          <input style={styles.input} name="correo" type="email" placeholder="Correo" onChange={handleChange} required />
          <input style={styles.input} name="contrasena" type="password" placeholder="Contraseña" onChange={handleChange} required />
          <select style={styles.input} name="rol" onChange={handleChange}>
            <option value="vecino">Vecino</option>
            <option value="prestador">Prestador de servicios</option>
          </select>
          <button style={styles.boton} type="submit">Registrarse</button>
        </form>
        <p style={styles.link}>¿Ya tienes cuenta? <a href="/">Inicia sesión</a></p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f4f8' },
  card: { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '360px' },
  titulo: { textAlign: 'center', color: '#2d6a4f', marginBottom: '0.25rem' },
  subtitulo: { textAlign: 'center', color: '#888', marginBottom: '1.5rem' },
  input: { width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', boxSizing: 'border-box' },
  boton: { width: '100%', padding: '0.75rem', backgroundColor: '#2d6a4f', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' },
  error: { color: 'red', marginBottom: '1rem', textAlign: 'center' },
  link: { textAlign: 'center', marginTop: '1rem', color: '#888' },
};
'use client';
import React, { useState } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';
import { login } from './Auth';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = login(email, password);
    if (user) {
      setError('');
      // Redirigir al usuario a la página "/mainscreen" si se autentica correctamente
      // Puedes usar el router de Next.js para hacer la redirección
      // router.push('/mainscreen');
      console.log('Usuario autenticado:', user);
      window.location.href = '/mainscreen';
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Iniciar sesión</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={styles.formInput}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.buttonPrimary}>
            Iniciar sesión
          </button>
        </form>
      </div>
      <div>
        <Link href="/register">
          <button className={styles.buttonLink}>Registrarse</button>
        </Link>
      </div>
    </div>
  );
}

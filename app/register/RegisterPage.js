'use client';
 
import React from 'react';
import styles from '../styles.module.css'
import { useRouter } from 'next/navigation';

export default function RegisterForm() {

  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/mainscreen')
  }

  return (
    <div className={styles.container}>
      <h1>Formulario de Registro</h1>
      <div className={styles.formContainer}>
        <form>
          <div>
            <input type="text" className={styles.formInput} placeholder="DNI" />
          </div>
          <div>
            <input type="text" className={styles.formInput} placeholder="Nombres" />
          </div>
          <div>
            <input type="text" className={styles.formInput} placeholder="Apellidos" />
          </div>
          <div>
            <input type="date" className={styles.formInput} placeholder="Fecha de nacimiento" />
          </div>
          <div>
            <input type="email" className={styles.formInput} placeholder="Correo electrónico" />
          </div>
          <div>
            <input type="password" className={styles.formInput} placeholder="Contraseña" />
          </div>
        </form>
        <div>
            <button type="submit" className={styles.buttonPrimary} onClick={handleRegisterClick}>
              Registrarse
            </button>
        </div>
      </div>
    </div>
  );
}
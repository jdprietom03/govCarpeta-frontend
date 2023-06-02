'use client'
 
import React from 'react'
import styles from '../styles.module.css'
import { useRouter } from 'next/navigation'

export default function FileLoader() {

  const router = useRouter()

  const handleRegisterClick = () => {
    router.push('/mainscreen')
  }

  return (
    <div className={styles.container}>
      <h1>Formulario de Envio de Archivo</h1>
        <select defaultValue="" className={`${styles.dropdown} ${styles.customSelect}`}>
            <option value="" disabled hidden>
                Entidad Gubernamental
            </option>
            <option value="opcion1">MinTIC</option>
            <option value="opcion2">Ministerio de Educación</option>
            <option value="opcion3">Registraduria</option>
        </select>
        <div>
            <button type="submit" className={styles.buttonPrimary} onClick={handleRegisterClick}>
              Enviar solicitud
            </button>
        </div>
      </div>
  )
}
'use client'
import React, { useEffect, useState } from 'react'
import styles from '../styles.module.css'
import Link from 'next/link'
import { login } from './Auth'
import { loginUser } from '../api/api'
import { getCookie, setCookie } from '../api/cookie'

export default function HomePage() {
  const [dni, setDNI] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = getCookie("user")

    if (user) {
      window.location.href = '/mainscreen'
    } else {
      setLoading(false)
    }
  }, [loading])

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {dni, password}
    if (user.dni !== '' && user.password !== '') {
      console.log(user)
      setError('')
      loginUser(user).then(data => {
        setCookie("user", JSON.stringify(data), 36000)
      })
      window.location.href = '/mainscreen'
    } else {
      setError('Credenciales inválidas')
    }
  }

  if (loading) {
    return <></>
  }

  return (
    <div className={styles.container}>
      <h1>Iniciar sesión</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Documento de identidad"
            value={dni}
            onChange={(e) => setDNI(e.target.value)}
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
  )
}

import React, { useState } from 'react'
import styles from '../styles.module.css'

export default function GetPremium() {
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [error, setError] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    // Validar los datos del formulario (en este ejemplo, se comprueba si se ha ingresado algún número de tarjeta)
    if (cardNumber.trim() === '') {
      setError('Por favor, ingresa un número de tarjeta válido')
      return
    }

    // Procesar la suscripción Premium aquí (enviar datos a una API, etc.)

    // Limpiar los campos del formulario después de enviar
    setCardNumber('')
    setExpirationDate('')
    setCvv('')
    setError('')

    // Mostrar mensaje de éxito o redirigir a una página de confirmación
    alert('¡Te has suscrito a Premium exitosamente!')
  }

  return (
    <div className={styles.container}>
      <h2>Obtener Premium</h2>
      <p className={styles.premiumPrice}>Precio de Premium: $9.99/mes</p>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <label>Número de tarjeta:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Ingrese el número de tarjeta"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Fecha de vencimiento:</label>
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            placeholder="MM/AA"
          />
        </div>
        <div className={styles.formGroup}>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="Ingrese el CVV"
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.buttonPrimary}>
          Suscribirse a Premium
        </button>
      </form>
    </div>
  )
}

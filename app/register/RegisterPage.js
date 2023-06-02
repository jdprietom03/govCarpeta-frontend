'use client'
import React, { useState } from "react"
import styles from "./register.module.css"
import { registerUser } from "../api/api"

const RegisterForm = () => {

    const [operators, setOperators] = useState([{
      "operatorId": 10006,
      "operatorName": "Operator's Gambit"
  }])

    const [form, setForm] = useState({
        id: "",
        name: "",
        email: "",
        address: "",
        password: "",
        operador: {
            operatorId: "",
            operatorName: ""
        }
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOperatorChange = (event) => {
        const { name, value } = event.target
        
      if (!value) {
        setForm({
          ...form,
          operador: null
        })

        return
      }

        setForm({
            ...form,
            operador: {
                ...form.operador,
                [name]: value,
                operatorName: operators.filter(operator => operator.operatorId == value).at(0)?.operatorName
            }
        })
    }

    const validateForm = (form) => {
      return Object.keys(form).reduce((acc, key) => acc && (form[key] !== '' && form[key] !== null) , true)
    }

    const handleRegisterClick = (event) => {
        event.preventDefault()

        if (validateForm(form)) {
          registerUser(form)
        } 
    }

    return (
        <div className={styles.container}>
            <h1>Formulario de Registro</h1>
            <div className={styles.formContainer}>
                <form>
                    <div>
                        <input type="text" name="id" className={styles.formInput} placeholder="DNI" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" name="name" className={styles.formInput} placeholder="Nombres" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" name="address" className={styles.formInput} placeholder="Apellidos" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="date" name="birthdate" className={styles.formInput} placeholder="Fecha de nacimiento" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="email" name="email" className={styles.formInput} placeholder="Correo electrónico" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="password" name="password" className={styles.formInput} placeholder="Contraseña" onChange={handleInputChange} />
                    </div>
                    <div>
                        <select type="text" name="operatorId" className={styles.formInput} placeholder="ID del operador" onChange={handleOperatorChange}>
                          <option value="" >Selecciona un operador</option>
                          {
                            operators.map( operator => (<option key={operator.operatorId} value={operator.operatorId}>{operator.operatorName}</option>))
                          }
                        </select>
                    </div>
                </form>
                <div>
                    <button type="submit" className={styles.buttonPrimary} onClick={handleRegisterClick}>
                        Registrarse
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm 

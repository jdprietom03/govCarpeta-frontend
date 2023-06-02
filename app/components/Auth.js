import React from "react";

export const users = [
    {
      id: 1,
      operador_id: 1,
      nombre: 'John',
      apellido: 'Doe',
      dni: '1234567890',
      fecha_nacimiento: '1990-01-01',
      correo: 'john@example.com',
      contrasena: 'password1',
    },
    // Agrega más usuarios mockeados según sea necesario
  ];
  
export function login(email, password) {
    const user = users.find((user) => user.correo === email && user.contrasena === password);
    return user;
  }
  
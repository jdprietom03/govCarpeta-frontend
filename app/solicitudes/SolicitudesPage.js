'use client';
import React from "react";
import styles from '../styles.module.css';
import { useRouter } from 'next/navigation';

export default function SolicitudesTable() {
  const tableData = [
    { id: 1, entidad: 'Entidad 1', estado: 'Activo', fechaActualizacion: '2022-05-10' },
    { id: 2, entidad: 'Entidad 2', estado: 'Inactivo', fechaActualizacion: '2022-06-15' },
    { id: 3, entidad: 'Entidad 3', estado: 'Pendiente', fechaActualizacion: '2022-07-20' },
  ];

  const router = useRouter();

  const handleMainClick = () => {
    router.push('/mainscreen');
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.fileTable}>
        <thead>
          <tr>
            <th>ID Solicitud</th>
            <th>Entidad</th>
            <th>Estado</th>
            <th>Fecha de actualización</th>
            <th>
              <button type="submit" onClick={handleMainClick} className={styles.buttonPrimary}>
                Volver al principal
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.entidad}</td>
              <td>{row.estado}</td>
              <td>{row.fechaActualizacion}</td>
              <td>{/* Botones de acciones */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

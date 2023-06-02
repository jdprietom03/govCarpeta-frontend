import React, { useState, Suspense } from 'react'
import styles from '../styles.module.css'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'


export default function UserInformation() {
  const user = {
    userName: 'Benito Antonio Martínez',
    photo: 'https://th.bing.com/th/id/OIP.Rn_8_xdrkIx8mXR8diMCGQAAAA?pid=ImgDet&rs=1',
  }

  const router = useRouter()

  const handleLoaderClick = () => {
    router.push('/loadfile')
  }

  const handlePremiumClick = () => {
    router.push('/getpremium')
  }

  const handleUpClick = () => {
    // Aquí puedes enviar los documentos cargados a una base de datos o hacer cualquier otra acción necesaria
    console.log('Documentos cargados:', mockedFiles)
  }

  const handleSolisClick = () => {
    router.push('/solicitudes')
  }

const [mockedFiles, setMockedFiles] = useState([
    {
      id: 1,
      name: 'archivo1.pdf',
      size: 1024 * 1024, // 1 MB
      type: 'application/pdf',
      uploadDate: new Date().toLocaleString(),
    },
    {
      id: 2,
      name: 'archivo2.jpg',
      size: 512 * 1024, // 0.5 MB
      type: 'image/jpeg',
      uploadDate: new Date().toLocaleString(),
    },
    {
      id: 3,
      name: 'archivo3.docx',
      size: 2048 * 1024, // 2 MB
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      uploadDate: new Date().toLocaleString(),
    },
    {
      id: 4,
      name: 'archivo4.png',
      size: 256 * 1024, // 0.25 MB
      type: 'image/png',
      uploadDate: new Date().toLocaleString(),
    },
    {
      id: 5,
      name: 'archivo5.xls',
      size: 4096 * 1024, // 4 MB
      type: 'application/vnd.ms-excel',
      uploadDate: new Date().toLocaleString(),
    },
  ])

  const handleDeleteFile = (id) => {
    setMockedFiles((prevMockedFiles) => prevMockedFiles.filter((file) => file.id !== id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>
          <img src={user.photo} alt="User Photo" className={styles.userPhoto} />
          <h3 className={styles.userName}>{user.userName}</h3>
          <div>
            <button className={styles.sidebarButton}>Perfil</button>
          </div>
          <div>
            <button className={styles.sidebarButton} onClick={handleSolisClick}>
              Solicitudes
            </button>
          </div>
          <div>
            <button className={styles.sidebarButton} onClick={handleUpClick}>
              Cargar documentos
            </button>
          </div>
          <div>
            <button className={styles.sidebarButton} onClick={handlePremiumClick}>
              Adquiere Premium
              </button>
          </div>
        </div>
        <div className={styles.textDiv}>
          <h2 className={styles.opaqueText}>Archivos cargados:</h2>
          <div className={styles.tableContainer}>
            <table className={styles.fileTable}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Tamaño</th>
                  <th>Tipo</th>
                  <th>Fecha de subida</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {mockedFiles.map((file) => (
                  <tr key={file.id}>
                    <td>{file.name}</td>
                    <td>{(file.size / (1024 * 1024)).toFixed(2)} MB</td>
                    <td>{file.type}</td>
                    <td>{file.uploadDate}</td>
                    <td>
                      <a onClick={handleLoaderClick}>
                        <FontAwesomeIcon icon={faUpload} />
                      </a>
                      <a href="#" onClick={() => handleDeleteFile(file.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                      <a href={file.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}


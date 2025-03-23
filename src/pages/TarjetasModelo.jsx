// TarjetasModelo.js
import React from 'react'

export default function TarjetasModelo({ modelos, onSeleccionarModelo }) {
  return (
    <div style={{ display: 'flex', marginTop: '20px' }}>
      {modelos.map((modelo) => (
        <div
          key={modelo.id}
          onClick={() => onSeleccionarModelo(modelo.archivo)}
          style={{
            margin: '0 10px',
            padding: '5px',
            width: '120px',
            height: '154px',
            borderRadius: '1rem',
            position: 'relative',
            zIndex: 1,
            cursor: 'pointer',
            overflow: 'visible',
            background: 'linear-gradient(to right, #74ebd5 0%, #acb6e5 100%)',
            transition: 'all 0.3s ease',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '1rem',
              zIndex: -1,
              background: 'linear-gradient(to bottom right, #f6d365 0%, #fda085 100%)',
              transform: 'rotate(2deg)',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '1rem',
              zIndex: -2,
              background: 'linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%)',
              transform: 'rotate(-2deg)',
            }}
          ></div>

          <div
            style={{
              background: '#292b2c',
              color: '#292b2c',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              borderRadius: '0.7rem',
              position: 'relative',
              zIndex: 2,
              transition: 'color 1s',
            }}
          >
            <p
              style={{
                fontWeight: 'bold',
                letterSpacing: '0.1em',
              }}
            >
              {modelo.nombre}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

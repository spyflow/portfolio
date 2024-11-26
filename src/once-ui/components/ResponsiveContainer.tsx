import React, { useState, useEffect } from 'react';

const ResponsiveContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    // Definir la función de detección de tamaño
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    // Llamar a la función una vez al cargar el componente
    handleResize();

    // Añadir el evento de redimensionamiento
    window.addEventListener('resize', handleResize);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row', // Cambiar dinámicamente
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
  };

  return <div style={containerStyle}>{children}</div>;
};

export default ResponsiveContainer;

import React from 'react';

const ResponsiveContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row', // Por defecto, horizontal
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
  };

  const mediaQueryStyle: React.CSSProperties = {
    flexDirection: 'column', // Cambiar a vertical en pantallas pequeñas
  };

  // Detectar el ancho de la pantalla
  const isSmallScreen = window.matchMedia('(max-width: 600px)').matches;

  return (
    <div style={{ ...containerStyle, ...(isSmallScreen ? mediaQueryStyle : {}) }}>
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ResponsiveContainer>
      <div style={{ background: 'lightblue', padding: '10px' }}>Elemento 1</div>
      <div style={{ background: 'lightgreen', padding: '10px' }}>Elemento 2</div>
      <div style={{ background: 'lightcoral', padding: '10px' }}>Elemento 3</div>
    </ResponsiveContainer>
  );
};

export default App;

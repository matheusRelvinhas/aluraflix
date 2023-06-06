import React, { useState } from 'react';
import MeuContexto from './MeuContexto';

function MeuContextoProvider({ children }) {
  const [meuEstado, setMeuEstado] = useState('');

  const atualizarEstado = (novoEstado) => {
    setMeuEstado(novoEstado);
  };

  return (
    <MeuContexto.Provider value={{ meuEstado, atualizarEstado }}>
      {children}
    </MeuContexto.Provider>
  );
}

export default MeuContextoProvider;

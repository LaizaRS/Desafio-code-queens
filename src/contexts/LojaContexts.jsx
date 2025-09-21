import { createContext, useContext, useState } from 'react';
import categoriasEProdutos from '../services/Mocks/categoriasEProdutos';

const LojaContext = createContext();

export function LojaProvider({ children }) {
  const categoriaInicial = 'hamburgers';
  const [categoria, setCategoria] = useState(categoriaInicial);

  const [produtoSelecionado, setProdutoSelecionado] = useState(
    categoriasEProdutos[categoriaInicial][0],
  );

  console.log('categoria[0]', categoria);

  return (
    <LojaContext.Provider
      value={{ categoria, setCategoria, produtoSelecionado, setProdutoSelecionado }}
    >
      {children}
    </LojaContext.Provider>
  );
}

export function useLoja() {
  return useContext(LojaContext);
}

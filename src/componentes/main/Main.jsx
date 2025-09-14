import { useState } from 'react';
import categoriasEProdutos from '../../services/Mocks/categoriasEProdutos';
import Categorias from '../categorias/Categorias';
import Delivery from '../delivery/Delivery';
import Favoritos from '../favoritos/Favoritos';
import Header from '../header/Header';
import MenuPopular from '../menuPopular/MenuPopular';
import NavBar from '../navbar/NavBar';
import './main.css';

function Main() {
  const [categoria, setCategoria] = useState('hamburgers');

  const [produtoSelecionado, setProdutoSelecionado] = useState(
    categoriasEProdutos['hamburgers'][0],
  );

  return (
    <main>
      <NavBar />
      <div className="header-categorias-menupopular">
        <Header />
        <Categorias categoria={categoria} setCategoria={setCategoria} />
        <MenuPopular
          categoriaSelecionada={categoria}
          produtoSelecionado={produtoSelecionado}
          setProdutoSelecionado={setProdutoSelecionado}
        />
      </div>
      <div className="favoritos-e-delivery">
        <Favoritos produtoSelecionado={produtoSelecionado} />
        <Delivery />
      </div>
    </main>
  );
}

export default Main;

import { useState } from 'react';
import { CiBellOn, CiSearch } from 'react-icons/ci';

import Categorias from '../categorias/Categorias';
import MenuPopular from '../menuPopular/MenuPopular';
import './header.css';

function Header() {
  const [categoria, setCategoria] = useState('hamburgers');

  return (
    <header>
      <div className="primeira-parte">
        <div>
          <p className="desbotado">Welcome</p>
          <h1>Let's Order Your Food</h1>
        </div>
        <section>
          <div className="search-section">
            <CiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <button className="arrumando">
            <CiBellOn />
          </button>
          <img className="perfil" src="./img/perfil.jpeg" alt="Imagem de Perfil" />
        </section>
      </div>
      <section className="segunda-parte">
        <div>
          <h2>
            Order Food and Get <br /> Discouts Up To <br />{' '}
          </h2>
          <h2 className="margin-top"> 50% Off</h2>
        </div>
        <img src="./img/imagem01.png" alt="desenho de entregador entregando a comida" />
      </section>
      <Categorias categoria={categoria} setCategoria={setCategoria} />
      <MenuPopular categoriaSelecionada={categoria} />
    </header>
  );
}

export default Header;

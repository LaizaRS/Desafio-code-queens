import { FaFireAlt, FaHeart, FaRegClock, FaStar } from 'react-icons/fa';

import './favoritos.css';

function Favoritos({ produtoSelecionado }) {
  return (
    <section className="favoritos">
      <div className="inline">
        <img
          className="img-favoritos"
          src={produtoSelecionado.imgSrc}
          alt={produtoSelecionado.nome}
        />
        <div className="coracao">
          <FaHeart />
        </div>
      </div>
      <div className="display-flex">
        <p className="nome-comida-favoritos">{produtoSelecionado.nome}</p>{' '}
        <p className="nome-comida-favoritos">${produtoSelecionado.valor}</p>
      </div>
      <div className="display-flex-favoritos">
        <p className="desbotado">{produtoSelecionado.tempo}min</p>
        <p className="dot"></p>
        <p className="desbotado">{produtoSelecionado.distancia}km</p>
      </div>
      <div className="display-flex  margin-bottom">
        <div className="display-flex-sem-justify-content">
          <FaStar className="laranja" />
          <p>{produtoSelecionado.estrelas}k</p>
        </div>
        <div className="display-flex-sem-justify-content">
          <FaRegClock className="laranja" />
          <p>{produtoSelecionado.tempo}mim</p>
        </div>
        <div className="display-flex-sem-justify-content">
          <FaFireAlt className="laranja" />
          <p>{produtoSelecionado.calorias}Kcal</p>
        </div>
      </div>
      <p className="desbotado margin-bottom">{produtoSelecionado.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </section>
  );
}

export default Favoritos;

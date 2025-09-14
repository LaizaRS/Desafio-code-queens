import { SiFireship } from 'react-icons/si';
import categoriasEProdutos from '../../services/Mocks/categoriasEProdutos';
import './menuPopular.css';

function MenuPopular({ categoriaSelecionada, produtoSelecionado, setProdutoSelecionado }) {
  const produtos = categoriasEProdutos[categoriaSelecionada];

  return (
    <section className="menu-popular">
      <div className="fogo-popular-menu">
        <SiFireship className="laranja" />
        <h2>Popular Menu</h2>
      </div>

      <div className="display-flex">
        {produtos.length > 0 ? (
          produtos.map((item) => (
            <div className="card" key={item.id} onClick={() => setProdutoSelecionado(item)}>
              <img className="comida-img" src={item.imgSrc} alt={item.nome} />
              <p className="nome-comida">{item.nome}</p>
              <div className="display-flex-itens-center-space-around">
                <p className="desbotado">{item.tempo}min</p>
                <p className="dot"></p>
                <p className="desbotado">{item.distancia}km</p>
              </div>
              <p className="preco-comida">${item.valor}</p>
            </div>
          ))
        ) : (
          <p>Não existe produtos nessa categoria</p>
        )}
      </div>
    </section>
  );
}

export default MenuPopular;

import categorias from '../../services/Mocks/categorias';
import './categorias.css';

function Categorias({ categoria, setCategoria }) {
  return (
    <section className="categorias">
      <h2>Category</h2>
      <div className="display-flex">
        {categorias.map((cat) => {
          let classe = 'categoria';
          if (categoria === cat.target) {
            classe += ' categoria-selecionada'; // adiciona a classe extra se for a ativa
          }

          return (
            <div key={cat.id} className={classe} onClick={() => setCategoria(cat.target)}>
              <img className="icone" src={cat.icone} alt={cat.nome} />
              <span className="display-flex">{cat.nome}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categorias;

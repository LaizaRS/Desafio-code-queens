import categorias from '../../services/Mocks/categorias';
import './categorias.css';

function Categorias({ categoria, setCategoria }) {
  return (
    <section className="categorias">
      <h2>Category</h2>
      <div className="display-flex">
        {categorias.map((category) => {
          let classe = 'categoria';
          if (categoria === category.target) {
            classe += ' categoria-selecionada';
          }

          return (
            <div key={category.id} className={classe} onClick={() => setCategoria(category.target)}>
              <img className="icone" src={category.icone} alt={category.nome} />
              <span className="display-flex">{category.nome}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categorias;

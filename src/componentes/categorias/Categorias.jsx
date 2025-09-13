import './categorias.css';

function Categorias({ categoria, setCategoria }) {
  const categorias = [
    { id: 'hamburgers', nome: 'Burger', icone: './img/iconeBurger.png', target: 'hamburgers' },
    { id: 'pizzas', nome: 'Pizza', icone: './img/iconePizza.png', target: 'pizzas' },
    { id: 'sorvetes', nome: 'Ice Cream', icone: './img/iconeIceCream.png', target: 'sorvetes' },
    { id: 'snacks', nome: 'Snack', icone: './img/iconeSnacks.png', target: 'snacks' },
    { id: 'drinks', nome: 'Drink', icone: './img/iconeDrinks.png', target: 'drinks' },
  ];

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

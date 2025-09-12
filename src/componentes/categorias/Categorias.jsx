import { useState } from 'react';
import './categorias.css';

function Categorias() {
  // Estado guarda a categoria selecionada
  const [categoria, setCategoria] = useState("");

  const categorias = [
    {
      nome: 'Burger',
      icone: "./img/iconeBurger.png",
      target: "hamburgers"
    },
    {
      nome: 'Pizza',
      icone: "./img/iconePizza.png",
      target: "pizzas"
    },
    {
      nome: 'Ice Cream',
      icone: "./img/iconeIceCream.png",
      target: "sorvetes"
    },
    {
      nome: 'Snack',
      icone: "./img/iconeSnacks.png",
      target: "snacks"
    },
    {
      nome: 'Drink',
      icone: "./img/iconeDrinks.png",
      target: "drinks"
    },
  ];

  // Função para atualizar a categoria
  function handleCategorias(target) {
    setCategoria(target);
  }

  return (
    <section className="categorias">
      <h2>Category</h2>
      <div className="display-flex">
        {categorias.map((cat, index) => (
          <div
            className={`categoria ${categoria === cat.target ? "ativa" : ""}`}
            key={index}
            onClick={() => handleCategorias(cat.target)}
          >
            <img className="icone" src={cat.icone} alt={cat.nome} />
            <span className="display-flex">{cat.nome}</span>
          </div>
        ))}
      </div>

      {/* Só para teste: mostrar qual categoria foi clicada */}
      {categoria && <p>Categoria selecionada: {categoria}</p>}
    </section>
  );
}

export default Categorias;
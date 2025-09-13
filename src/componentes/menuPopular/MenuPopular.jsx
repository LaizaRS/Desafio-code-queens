import { SiFireship } from "react-icons/si";

import './menuPopular.css';





function MenuPopular({ categoriaSelecionada }) {

const categorias = { 
  hamburgers: [ 
    { 
      id: 1, 
      nome: 'Cheeseburger', 
      valor: 23, 
      tempo: 20, 
      distancia: 2.5, 
      imgSrc: "./img/hamburger0.png", 
      favorito: false, 
      estrelas: 4.5,
      calorias: 750,
      description: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty." 
    }, { 
      id: 2, 
      nome: 'Bacon Burger', 
      valor: 28, 
      tempo: 25, 
      distancia: 3.0, 
      imgSrc: "./img/hamburger1.png", 
      favorito: false, 
      estrelas: 4.8,
      calorias: 980,
      description: "A bacon burger is a hamburger topped with crispy bacon, often combined with cheese for extra flavor."
    }, { 
      id: 3,   
      nome: 'Veggie Burger', 
      valor: 20, 
      tempo: 22, 
      distancia: 2.2, 
      imgSrc: "./img/hamburger2.png", 
      favorito: false, 
      estrelas: 4.2,
      calorias: 420,
      description: "A veggie burger is made from plant-based ingredients such as beans, grains, or vegetables, served like a traditional burger." 
    }, { 
      id: 4, 
      nome: 'Double Burger', 
      valor: 32, 
      tempo: 30, 
      distancia: 3.5, 
      imgSrc: "./img/hamburger3.png", 
      favorito: false, 
      estrelas: 4.9,
      calorias: 1200,
      description: "A double burger comes with two meat patties stacked together, usually with cheese and other toppings." 
    },      
  ],       
  pizzas: [ 
    { 
      id: 5, 
      nome: 'Margherita', 
      valor: 35, 
      tempo: 30, 
      distancia: 4.0, 
      imgSrc: "./img/pizza0.png", 
      favorito: false, 
      estrelas: 4.7,
      calorias: 890,
      description: "A classic Margherita pizza with fresh tomato sauce, mozzarella cheese, and basil leaves." 
    }, { 
      id: 6, 
      nome: 'Pepperoni', 
      valor: 40, 
      tempo: 35, 
      distancia: 4.5, 
      imgSrc: "./img/pizza1.png", 
      favorito: false, 
      estrelas: 4.9,
      calorias: 1200,
      description: "A popular pizza topped with spicy slices of pepperoni and melted cheese." 
    }, { 
      id: 7, 
      nome: 'Quatro Queijos', 
      valor: 42, 
      tempo: 38, 
      distancia: 3.8, 
      imgSrc: "./img/pizza2.png", 
      favorito: false, 
      estrelas: 4.6,
      calorias: 1100,
      description: "A four-cheese pizza combining mozzarella, gorgonzola, parmesan, and provolone." 
    }, { 
      id: 8, 
      nome: 'Frango', 
      valor: 38, 
      tempo: 33, 
      distancia: 4.2, 
      imgSrc: "./img/pizza3.png", 
      favorito: false, 
      estrelas: 4.4,
      calorias: 950,
      description: "A pizza topped with shredded chicken and creamy Catupiry cheese." 
    }, 
  ], 
  sorvetes: [ 
    { 
      id: 9, 
      nome: 'Chocolate', 
      valor: 12, 
      tempo: 10, 
      distancia: 1.5, 
      imgSrc: "./img/sorvete0.png", 
      favorito: false, 
      estrelas: 4.8,
      calorias: 320,
      description: "Rich and creamy chocolate ice cream made with real cocoa." 
    }, { 
      id: 10, 
      nome: 'Morango', 
      valor: 12, 
      tempo: 10, 
      distancia: 1.8, 
      imgSrc: "./img/sorvete1.png", 
      favorito: false, 
      estrelas: 4.6,
      calorias: 280,
      description: "Refreshing strawberry ice cream with natural fruit flavor." 
    }, { 
      id: 11, 
      nome: 'Baunilha', 
      valor: 10, 
      tempo: 8, 
      distancia: 1.2, 
      imgSrc: "./img/sorvete2.png", 
      favorito: false, 
      estrelas: 4.3,
      calorias: 250,
      description: "Classic vanilla ice cream with a smooth and sweet taste." 
    }, { 
      id: 12, 
      nome: 'Napolitano', 
      valor: 15, 
      tempo: 12, 
      distancia: 2.0, 
      imgSrc: "./img/sorvete3.png", 
      favorito: false, 
      estrelas: 4.7,
      calorias: 400,
      description: "A mix of chocolate, strawberry, and vanilla flavors in one scoop." 
    }, 
  ], 
  snacks: [ 
    { 
      id: 13, 
      nome: 'Batata Frita', 
      valor: 18, 
      tempo: 15, 
      distancia: 2.0, 
      imgSrc: "./img/snaks0.png", 
      favorito: false, 
      estrelas: 4.8,
      calorias: 600,
      description: "Crispy golden french fries served hot with a pinch of salt." 
    }, { 
      id: 14, 
      nome: 'Onion Rings', 
      valor: 20, 
      tempo: 18, 
      distancia: 2.3, 
      imgSrc: "./img/snaks1.png", 
      favorito: false, 
      estrelas: 4.5,
      calorias: 550,
      description: "Deep-fried onion rings with a crunchy coating." 
    }, { 
      id: 15, 
      nome: 'Nuggets', 
      valor: 22, 
      tempo: 17, 
      distancia: 2.5, 
      imgSrc: "./img/snaks2.png", 
      favorito: false, 
      estrelas: 4.6,
      calorias: 700,
      description: "Tender chicken nuggets with a golden crust." 
    }, { 
      id: 16, 
      nome: 'Pão de Alho', 
      valor: 15, 
      tempo: 12, 
      distancia: 2.1, 
      imgSrc: "./img/snaks3.png", 
      favorito: false, 
      estrelas: 4.2,
      calorias: 480,
      description: "Garlic bread baked to perfection with butter and herbs." 
    }, 
  ], 
  drinks: [ 
    { 
      id: 17, 
      nome: 'Coca-Cola', 
      valor: 8, 
      tempo: 5, 
      distancia: 1.0, 
      imgSrc: "./img/drinks0.png", 
      favorito: false, 
      estrelas: 4.9,
      calorias: 140,
      description: "A classic refreshing soda with a unique flavor." 
    }, { 
      id: 18, 
      nome: 'Suco de Laranja', 
      valor: 10, 
      tempo: 6, 
      distancia: 1.2, 
      imgSrc: "./img/drinks1.png", 
      favorito: false, 
      estrelas: 4.7,
      calorias: 110,
      description: "Fresh orange juice full of vitamin C." 
    }, { 
      id: 19, 
      nome: 'Milkshake de Morango', 
      valor: 15, 
      tempo: 12, 
      distancia: 1.8, 
      imgSrc: "./img/drinks2.png", 
      favorito: false, 
      estrelas: 4.6,
      calorias: 650,
      description: "Creamy strawberry milkshake topped with whipped cream." 
    }, { 
      id: 20, 
      nome: 'Água com Gás', 
      valor: 6, 
      tempo: 4, 
      distancia: 0.8, 
      imgSrc: "./img/drinks3.png", 
      favorito: false, 
      estrelas: 4.3,
      calorias: 0,
      description: "Sparkling water, refreshing and hydrating." 
    }, 
  ], 
};

  const itens = categorias[categoriaSelecionada] || [];


  return (
  <section className='menu-popular'> 
    <div className='fogo-popular-menu'>
      <SiFireship  className='laranja'/>

      <h2>Popular Menu</h2> 
    </div>

   <div className='display-flex'> 
        {itens.length > 0 ? (
          itens.map((item) => (
            <div className='card' key={item.id}> 
              <img className='comida-img' src={item.imgSrc} alt={item.nome} /> 
              <p className='nome-comida'>{item.nome}</p> 
              <div className='display-flex-itens-center-space-around'> 
                <p className='desbotado'>{item.tempo}min</p>
                <p className='dot'></p>
                <p className='desbotado'>{item.distancia}km</p> 
              </div> 
              <p className='preco-comida'>${item.valor}</p> 
            </div>
          ))
        ) : (
          <p>Selecione uma categoria para ver os itens</p>
        )}
      </div> 

  </section>
  )
}

export default MenuPopular
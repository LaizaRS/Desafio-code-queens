import { FaFireAlt, FaHeart, FaRegClock, FaStar } from "react-icons/fa";



import './favoritos.css';

function Favoritos() {
  

  return (
    <section className='favoritos'>
      <div className="inline">
        <img className="img-favoritos" src="./img/hamburger0.png" alt="" />
        <div className="coracao"><FaHeart /></div>
      </div>
      <div className="display-flex">
        <p className="nome-comida-favoritos">CheeseBurger</p> <p className="nome-comida-favoritos">$23</p>
      </div>
      <div className='display-flex-favoritos'> 
      <p className='desbotado'>20min</p>
      <p className='dot'></p>
      <p className='desbotado'>2km</p> 
      </div>
      <div className="display-flex">
        <div className="display-flex-sem-justify-content">
          <FaStar className="laranja" />
          <p>4.5k</p>
        </div>
        <div className="display-flex-sem-justify-content">
          <FaRegClock className="laranja" />
          <p>20mim</p>
        </div>
        <div className="display-flex-sem-justify-content">
         <FaFireAlt className="laranja" />
          <p>30Kcal</p>
        </div>
      </div>
      <p className='desbotado'>
       A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. 
      </p>
      <button className="add-to-cart">Add to Cart</button>

    </section>
  )
}

export default Favoritos
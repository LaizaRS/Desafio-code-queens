import Header from "../header/Header";
import NavBar from "../navbar/navbar";


import Delivery from "../delivery/Delivery";
import Favoritos from "../favoritos/Favoritos";
import './main.css';

function Main() {
  

  return (
    <main>
      <NavBar />
      <Header />
      <div className="favoritos-e-delivery">
        <Favoritos />
        <Delivery />
      </div>
    </main>
  )
}

export default Main
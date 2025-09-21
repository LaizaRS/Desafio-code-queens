import Categorias from '../categorias/Categorias';
import Delivery from '../delivery/Delivery';
import Favoritos from '../favoritos/Favoritos';
import Header from '../header/Header';
import MenuPopular from '../menuPopular/MenuPopular';
import NavBar from '../navbar/NavBar';
import './main.css';

function Main() {
  return (
    <main>
      <NavBar />
      <div className="header-categorias-menupopular">
        <Header />
        <Categorias />
        <MenuPopular />
      </div>
      <div className="favoritos-e-delivery">
        <Favoritos />
        <Delivery />
      </div>
    </main>
  );
}

export default Main;

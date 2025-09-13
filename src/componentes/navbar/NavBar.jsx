import { FaCameraRetro, FaCartPlus, FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

import './navbar.css';



function NavBar() {
  
  return (
    <aside>
      <nav>
        <img className="img-nav-bar" src="./img/imagem03.png" alt="bandeija de comida fechada" />
        <ul>
          <li><button className="bg-tranparent selected"> <GoHomeFill /> </button></li>
          <li><button className="bg-tranparent"> <FaHeart /> </button></li>
          <li><button className="bg-tranparent"> <FaCartPlus /> </button></li>
          <li><button className="bg-tranparent"> <IoChatbubbleEllipsesOutline /> </button></li>
          <li><button className="bg-tranparent"> <FaCameraRetro /> </button></li>
        </ul>
        
        <div className="log-out">
          <button className="bg-tranparent"> <MdOutlineLogout /> </button>
        </div>
      </nav>
    </aside>
  )
}

export default NavBar

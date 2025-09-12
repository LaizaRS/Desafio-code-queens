import './delivery.css';


function Delivery() {
  

  return (
    <section className='delivery'>
     <img className='img-delivery' src="./img/imagem02.png" alt="desenho de entregador na motinha" />
     <p>Faster Delivery and get Free <br /> Shipping If You Subscribe</p>

     <div className="subiscribe"> 
      <input type="text" placeholder='Enter your e-mail' />
      <button className='button-delivery'>Subscribe</button>
     </div>
    
    </section>
  )
}

export default Delivery
import React from 'react'
import CartEvent from './CartEvent';
// import '.'

const showEvents = (props) =>{
    let summa = 0;
    props.cart.forEach(el => {
      summa += Number.parseFloat(el.price);
    });
    return(
      <div>
        <h2>Корзина</h2>
        <div className='favourites-events'>
        {props.cart.map(el => ( 
          <CartEvent onDeleteCart={props.onDeleteCart} key={el.id} item = {el}/>
        ))}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}</p> 
        </div>
        <button className='button-cart' onClick={handleBuyClick}>Купить</button>
      </div>
    )
  }
  
  const handleBuyClick = (props) => {
    // Очистить корзину
    props.cart=[];
};

  const showNothing = () => {
    return(
      <div className='empty'>
        <h2>Нет билетов</h2>
      </div>
    )
  }

function Cart(props) {
  return (
    <div className='event-page'>
        {props.cart.length > 0 ?
        showEvents(props) : showNothing()}
    </div>
  )
}

export default Cart
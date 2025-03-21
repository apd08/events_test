import React, { useState } from 'react'
import {FaHeart, FaShoppingCart} from "react-icons/fa" //change for new icon
import { Link } from 'react-router-dom';

import Event from '../components/Event';
import CartEvent from '../components/CartEvent';

export default function SuperAdminHeader(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
            <Link to='' className='logo'>Events</Link>
            
            <ul className='nav'>
              {/* <Link to='Register' className='nav-li'>Зарегестрировться</Link>   */}
              <Link to='/' className='nav-li'>Выйти</Link>
              {/* <Link to='about' className='nav-li'>Контакты</Link> */}
            <Link to='events' className='nav-li'>Добавить мероприятие </Link>
            </ul>
            {/* <Link to='cart'><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`event-button ${cartOpen && 'active'}`}/></Link> */}

            {/* <FaHeart onClick={() => setEventOpen(eventOpen = !eventOpen)} className={`event-button ${eventOpen && 'active'}`}/> */}
            {/* change icon, объявляем анонимную функцию при нажатии, значние eventOpen меняется на противоложное */}

            {cartOpen && (
              <div className='shop-cart'>
                {/* {props.order.map(al => (
                  <CartEvent key={el.id} item = {el} />
                ))} */}
                {props.cart.length > 0 ?
                showEvents(props) : showNothing()}
              </div>
            )} 
        </div>
        {/* <div className='presentation'></div> */}
      
    </header>
  )


}

const showEvents = (props) =>{
  let summa = 0;
  props.cart.forEach(el => {
    summa += Number.parseFloat(el.price);
  });
  return(
    <div>
      <div className='favourites-events'>
      {props.cart.map(el => ( 
        <CartEvent onDeleteCart={props.onDeleteCart} key={el.id} item = {el}/>
      ))}
      </div>
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}</p> 
      <button className='button-cart'>Купить</button>

    </div>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>Нет билетов</h2>
    </div>
  )
}
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { LuPencil } from "react-icons/lu";
import {FaTrash } from 'react-icons/fa'
import { IoLocationOutline } from "react-icons/io5";


export class SAItem extends Component {
handleTrashClick = () => {
    // Toggle a class on the item div to hide it
    this.itemDiv.classList.toggle('hidden');
  };
  render() {
    return (
      <div ref={(itemDiv) => (this.itemDiv = itemDiv)} className='item'>
        <img src={" /img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <p className='item-date'>{this.props.item.date}</p>
        <p className='item-date item-date-location loc-text'><IoLocationOutline/>{this.props.item.place}</p>
        <b>{this.props.item.price}</b> 
        <div className='add-to-favourite' ><Link to='change' className='pencil'><LuPencil className='circle-heart'/></Link></div>
        <div className='add-to-cart' onClick = {() => {this.handleTrashClick();}}><FaTrash className='circle-heart'/></div>
      </div>
    )
  }
}

export default SAItem


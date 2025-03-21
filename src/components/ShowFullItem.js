import React, { Component } from 'react'
import {FaHeart} from "react-icons/fa" 

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b> 
        {/* <b>{this.props.item.price}BYN</b> */}
        <div className='add-to-cart' onClick = {() => this.props.onAdd(this.props.item)}>+</div>
        <div className='add-to-favourite' onClick = {() => this.props.onAdd(this.props.item)}><FaHeart className='circle-heart'/></div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
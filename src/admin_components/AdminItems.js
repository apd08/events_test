import React, { Component } from 'react'
import Item from "./AdminItem"
import Categories from '../components/Categories';





export class AdminItems extends Component {
  render() {
    
    return (
      <div>
        <main>
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} onAddCart={this.props.onAddCart}/> /*передаетсы текущий элемент, с которым сейчас взаимодействуем*/

        ))}
        </main>
      </div>
    )
  }
}

export default AdminItems
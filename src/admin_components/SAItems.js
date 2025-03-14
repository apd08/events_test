import React, { Component } from 'react'
import Item from "./SAItem"
import Categories from '../components/Categories';


export class SAItems extends Component {
  render() {
    
    return (
      <div>
        <main>
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/> /*передаетсы текущий элемент, с которым сейчас взаимодействуем*/

        ))}
        </main>
      </div>
    )
  }
}

export default SAItems
import React, { Component } from 'react'
import AddItem from "./AddItem"





export class AddItems extends Component {
// constructor(props){
//   super(props)
//     this.chooseCategory = this.chooseCategory.bind(this); //для взаимодействия с состояниями
    

// }
  render() {
    
    return (
      <div>
        {/* <Categories chooseCategory={this.chooseCategory}/> */}

        <main>
        {this.props.items.map(el => (
            <AddItem onShowItem={this.props.onShowItem} key={el.id} item={el} /> /*передаетсы текущий элемент, с которым сейчас взаимодействуем*/
// onAdd={this.props.onAdd} onAddCart={this.props.onAddCart}
        ))}
        </main>
      </div>
    )
  }
  // chooseCategory(category) {
  //   if(category === 'all') {
  //     this.setState({currentItems: this.props.state.items})
  //     return 
  //   }
    
  //       this.setState({
  //         currentItems: this.props.state.items.filter(el => el.category === category)
  //       })
  //     }
}

export default AddItems
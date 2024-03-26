import React, { Component } from 'react'
import Item from './Item'


export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.products.map(el => (
          el.img ? <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/> : null
        ))}
      </main> 
    );
  }
}

export default Items;
/* export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.products.map(el => (
         <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))}
      </main> 
    )
  }
}

export default Items */


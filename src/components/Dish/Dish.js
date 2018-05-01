import React, {Component} from 'react';

export default class Dish extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt='Dish' width={'100px'} height={'100px'}/>
        {this.props.title}
        {this.props.description}
        {this.props.price}
      </div>
    );
  }
}

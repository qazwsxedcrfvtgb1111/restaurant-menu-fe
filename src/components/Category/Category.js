import React, {Component} from 'react';

export default class Category extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt='Category' width={'100px'} height={'100px'}/>
        <span>{this.props.title}</span> <span>{this.props.description}</span>
      </div>
    );
  }
}

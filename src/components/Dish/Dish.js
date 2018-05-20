import React, {Component} from 'react';
import './Dish.scss';

export default class Dish extends Component {
    render() {
        return (
            <div className='Dish shadowed'>
                <div className='img-container'>
                    <img className='img' src={this.props.img} alt='Dish'/>
                </div>
                <div className='text-container'>
                    <div className='title'>
                        {this.props.title}
                    </div>
                    <div className='description'>
                        {this.props.description}
                    </div>
                </div>
                <div className='price'>
                    {this.props.price}
                </div>
            </div>
        );
    }
}

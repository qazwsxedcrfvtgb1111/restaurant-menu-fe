import React, {Component} from 'react';
import AppLoader from '../../AppLoader/AppLoader';
import ApiImage from '../../ApiImage/ApiImage';

export default class DishView extends Component {
    render() {
        return (
            <div className='Dish shadowed'>
                <AppLoader loading={this.props.fetching}/>
                <div className='img-container'>
                    <ApiImage src={this.props.img} alt='Dish'/>
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
                    {this.props.price}₴
                </div>
            </div>
        );
    }
}

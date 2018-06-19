import React, {Component} from 'react';
import AppLoader from '../../AppLoader/AppLoader';
import ApiImage from '../../ApiImage/ApiImage';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import Input from '../../Input/Input';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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
                {!this.props.authorized &&
                <div className='order-container'>
                    <FontAwesomeIcon icon={faMinus} onClick={() => !this.props.disabled && this.props.onMinusClick()}
                                     size='2x'/>
                    <Input type='number' value={0}/>
                    <FontAwesomeIcon icon={faPlus} onClick={() => !this.props.disabled && this.props.onPlusClick()}
                                     size='2x'/>
                </div>}
                <div className='price'>
                    {this.props.price}₴
                </div>
            </div>
        );
    }
}

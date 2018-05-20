import React, {Component} from 'react';
import './Dish.scss';
import Input from '../Input/Input';
import AppLoader from '../AppLoader/AppLoader';

export default class Dish extends Component {
    render() {
        if (this.props.editing) {
            return (
                <div className='Dish shadowed'>
                    <AppLoader loading={this.props.fetching}/>
                    <div className='img-container'>
                        <img className='img' src={this.props.img} alt='Dish'/>
                    </div>
                    <div className='text-container'>
                        <div className='title'>
                            <Input value={this.props.title} hideLabel={true} label='Title'
                                   onChange={value => this.props.onEdit('title', value)}/>
                        </div>
                        <div className='description'>

                            <Input value={this.props.description} hideLabel={true} label='Description'
                                   onChange={value => this.props.onEdit('description', value)}/>
                        </div>
                    </div>
                    <div className='price'>
                        <Input value={this.props.price} hideLabel={true} label='Price' type='number'
                               onChange={value => this.props.onEdit('price', value)}/>₴
                    </div>
                </div>
            )
        }

        return (
            <div className='Dish shadowed'>
                <AppLoader loading={this.props.fetching}/>
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
                    {this.props.price}₴
                </div>
            </div>
        );
    }
}

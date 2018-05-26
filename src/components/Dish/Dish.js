import React, {Component} from 'react';
import './Dish.scss';
import Input from '../Input/Input';
import AppLoader from '../AppLoader/AppLoader';
import ImgUpload from '../ImageUpload/ImageUpload';
import ApiImage from '../ApiImage/ApiImage';

export default class Dish extends Component {
    render() {
        if (this.props.editing) {
            return (
                <div className='Dish shadowed animated fadeIn'>
                    <AppLoader loading={this.props.fetching}/>
                    <div className='img-container'>
                        <ImgUpload img={this.props.img} remove={this.props.removeImg}
                                   className={this.props.errors && this.props.errors.img && 'error' || ''}
                                   fileSet={(file) => this.props.setImg(file)}/>
                    </div>
                    <div className='text-container'>
                        <div className='title'>
                            <Input value={this.props.title} hideLabel={true} label='Title'
                                   className={this.props.errors && this.props.errors.title && 'error' || ''}
                                   onChange={value => this.props.onEdit('title', value)}/>
                        </div>
                        <div className='description'>

                            <Input value={this.props.description} hideLabel={true} label='Description'
                                   className={this.props.errors && this.props.errors.description && 'error' || ''}
                                   onChange={value => this.props.onEdit('description', value)}/>
                        </div>
                    </div>
                    <div className='price'>
                        <Input value={this.props.price} hideLabel={true} label='Price' type='number'
                               className={this.props.errors && this.props.errors.price && 'error' || ''}
                               onChange={value => this.props.onEdit('price', value)}/>₴
                    </div>
                </div>
            );
        }

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

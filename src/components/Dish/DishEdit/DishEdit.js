import React, {Component} from 'react';
import Input from '../../Input/Input';
import AppLoader from '../../AppLoader/AppLoader';
import ImageUpload from '../../ImageUpload/ImageUpload';

export default class DishEdit extends Component {
    render() {
        return (
            <div className='Dish shadowed animated fadeIn'>
                <AppLoader loading={this.props.fetching}/>
                <div className='img-container'>
                    <ImageUpload img={this.props.img} remove={this.props.removeImg}
                               error={this.props.errors.img}
                               fileSet={(file) => this.props.setImg(file)}/>
                </div>
                <div className='text-container'>
                    <div className='title'>
                        <Input value={this.props.title} hideLabel={true} label='Title'
                               error={this.props.errors.title}
                               onChange={value => this.props.onEdit('title', value)}/>
                    </div>
                    <div className='description'>

                        <Input value={this.props.description} hideLabel={true} label='Description'
                               error={this.props.errors.description}
                               onChange={value => this.props.onEdit('description', value)}/>
                    </div>
                </div>
                <div className='price'>
                    <Input value={this.props.price} hideLabel={true} label='Price' type='number'
                           error={this.props.errors.price}
                           onChange={value => this.props.onEdit('price', value)}/>₴
                </div>
            </div>
        );
    }
}

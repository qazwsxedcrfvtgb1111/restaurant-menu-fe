import React, {Component} from 'react';
import AppLoader from '../../AppLoader/AppLoader';
import Input from '../../Input/Input';
import ImageUpload from '../../ImageUpload/ImageUpload';

export default class CategoryEdit extends Component {
    render() {
        return (
            <div className='Category shadowed animated fadeIn'>
                <AppLoader loading={this.props.fetching}/>
                <div className='category-container'>
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
                </div>
            </div>
        );
    }
}

import React, {Component} from 'react';
import './Category.scss';
import {Link} from 'react-router-dom';
import Input from '../Input/Input';
import AppLoader from '../AppLoader/AppLoader';
import ImgUpload from '../ImageUpload/ImageUpload';
import ApiImage from '../ApiImage/ApiImage';

export default class Category extends Component {
    render() {
        if (this.props.editing) {
            return (
                <div className='Category shadowed animated fadeIn'>
                    <AppLoader loading={this.props.fetching}/>
                    <div className='category-container'>
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
                    </div>
                </div>
            );
        }


        const contents = (<>
            <AppLoader loading={this.props.fetching}/>
            <div className='category-container'>
                <div className='img-container'>
                    <ApiImage src={this.props.img} alt='Category'/>
                </div>
                <div className='text-container'>
                    <div className='title'>{this.props.title}</div>
                    <div className='description'>{this.props.description}</div>
                    {this.props.showIcons && <span onClick={this.props.onEditClick}>Pencil</span>}
                </div>
            </div>
        </>);

        if (this.props.fetching) {
            return (<div className='Category shadowed'>
                {contents}
            </div>);
        }
        return (
            <Link className='Category shadowed' to={`/category/${this.props.id}`}>
                {contents}
            </Link>
        );
    }
}

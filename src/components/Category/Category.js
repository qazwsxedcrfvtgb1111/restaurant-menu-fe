import React, {Component} from 'react';
import './Category.scss';
import {Link} from 'react-router-dom';
import Input from '../Input/Input';
import AppLoader from '../AppLoader/AppLoader';

export default class Category extends Component {
    render() {
        if (this.props.editing) {
            return (
                <div className='Category shadowed'>
                    <AppLoader loading={this.props.fetching}/>
                    <div className='category-container'>
                        <div className='img-container'>
                            <img src={this.props.img} alt='Category' className='img'/>
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
                    </div>
                </div>
            );
        }


        const contents = (<>
            <AppLoader loading={this.props.fetching}/>
            <div className='category-container'>
                <div className='img-container'>
                    <img src={this.props.img} alt='Category' className='img'/>
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

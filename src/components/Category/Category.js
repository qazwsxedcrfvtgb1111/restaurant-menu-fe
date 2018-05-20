import React, {Component} from 'react';
import './Category.css';
import {Link} from 'react-router-dom';

export default class Category extends Component {
    render() {
        return (
            <Link className='Category shadowed' to={`/category/${this.props.id}`}>
                <div className='category-container'>
                    <div className='img-container'>
                        <img src={this.props.img} alt='Category' className='img'/>
                    </div>
                    <div className='text-container'>
                        <div className='title'>{this.props.title}</div>
                        <div className='description'>{this.props.description}</div>
                    </div>
                </div>
            </Link>
        );
    }
}

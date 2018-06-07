import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppLoader from '../../AppLoader/AppLoader';
import ApiImage from '../../ApiImage/ApiImage';

export default class CategoryView extends Component {
    render() {
        const contents = (<>
        <AppLoader loading={this.props.fetching}/>
        <div className='category-container'>
            <div className='img-container'>
                <ApiImage src={this.props.img} alt='Category'/>
            </div>
            <div className='text-container'>
                <div className='title'>{this.props.title}</div>
                <div className='description'>{this.props.description}</div>
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

import React, {Component} from 'react';
import './Header.scss';
import Button from '../Button/Button';

export default class Header extends Component {
    render() {
        return (
            <nav className='Header shadowed'>
                <div className='title-container'>Restaurant</div>
                {this.props.loggedIn && <Button onClick={this.props.logout}>Log out</Button>}
            </nav>
        );
    }
}

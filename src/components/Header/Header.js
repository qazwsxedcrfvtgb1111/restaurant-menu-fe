import React, {Component} from 'react';
import './Header.scss';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className='Header shadowed'>
                <Link to='/' className='title-container'>Punta Marina</Link>
                {this.props.loggedIn && <>
                <Button onClick={() => this.props.go('/users')}>Users</Button>
                <Button onClick={() => this.props.go('/orders')}>Orders</Button>
                <Button onClick={() => this.props.go('/data')}>Data</Button>
                <Button onClick={this.props.logout}>Log out</Button>
                </> ||
                <Button onClick={this.props.placeOrder}>Place order</Button>
                }
                <Button onClick={() => this.props.go('/about')}>About</Button>
                <Button onClick={() => this.props.go('/contacts')}>Contacts</Button>
            </nav>
        );
    }
}

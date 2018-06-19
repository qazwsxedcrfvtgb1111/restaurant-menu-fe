import React, {Component} from 'react';
import './Order.scss';

export default class Order extends Component {
    render() {
        return (
            <div className='Order shadowed'>
                <div className='text-container'>
                    <div className='title'>
                        <div>Beef steak – 3</div>
                        <div>Chicken steak – 3</div>
                        <div>Coca-cola – 3</div>
                        <div>Water – 3</div>
                    </div>
                    <div className='description'>
                        {this.props.description}
                    </div>

                </div>
            </div>
        );
    }
}

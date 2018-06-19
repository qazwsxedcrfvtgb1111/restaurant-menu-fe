import React, {Component} from 'react';
import {connect} from 'react-redux';
import Order from '../../components/Order/Order';
import ControlIcons from '../../components/ControlIcons/ControlIcons';

class Categories extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className='Dishes'>
                {this.props.orders.items.map((category, index) => (
                    <div className='control-container' key={index}>
                        <Order/>
                        <ControlIcons/>
                    </div>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const orders = {items: [1]};
    return {orders};
}

export default connect(mapStateToProps)(Categories);

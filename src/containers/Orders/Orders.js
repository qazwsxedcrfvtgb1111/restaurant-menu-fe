import React, {Component} from 'react';
import {connect} from 'react-redux';

class Categories extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className='Orders'>
                {this.props.orders.items.map((category, index) => (
                    <div className='control-container' key={index}>

                    </div>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {orders} = [
        {

        }
    ]
}

export default connect(mapStateToProps)(Categories);

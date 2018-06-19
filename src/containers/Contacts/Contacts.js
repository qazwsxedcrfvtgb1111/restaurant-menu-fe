import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Contacts.scss';
import BackButton from '../../components/BackButton/BackButton';

class Contacts extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className='Contacts'>
                <BackButton/>
                Site admin can be reached by phone - +380671583887.
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {data} = state;
    return data;
}

export default connect(mapStateToProps)(Contacts);

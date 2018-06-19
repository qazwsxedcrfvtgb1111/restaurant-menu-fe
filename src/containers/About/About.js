import React, {Component} from 'react';
import {connect} from 'react-redux';
import './About.scss';
import BackButton from '../../components/BackButton/BackButton';

class About extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className='About'>
                <BackButton/>
                App created by Dmitro Tregubov for his diploma project.
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {data} = state;
    return data;
}

export default connect(mapStateToProps)(About);

import React, {Component} from 'react';
import './AppLoader.scss';
import {BarLoader} from 'react-spinners';

export default class AppLoader extends Component {
    render() {
        if (this.props.loading) {
            return (
                <div className='AppLoader'>
                    <BarLoader loading={true} width={500} height={10} color={'#5a5a5a'}/>
                </div>
            );
        }
        return null;
    }
}

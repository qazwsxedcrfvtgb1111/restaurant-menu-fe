import React, {Component} from 'react';
import './AddElement.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';

export default class AddElement extends Component {
    render() {
        return (
            <div className='AddElement' onClick={this.props.onAdd}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        );
    }
}

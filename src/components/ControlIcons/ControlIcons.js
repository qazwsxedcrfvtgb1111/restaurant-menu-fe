import React, {Component} from 'react';
import './ControlIcons.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

export default class ControlIcons extends Component {
    render() {
        return (
            <div className={`ControlIcons ${this.props.disabled && 'disabled'}`}>
                {this.props.editing ?
                    <>
                        <FontAwesomeIcon icon={faCheck} onClick={() => !this.props.disabled && this.props.onSaveClick()}
                                         size='2x'/>
                        <FontAwesomeIcon icon={faTimes}
                                         onClick={() => !this.props.disabled && this.props.onCancelClick()} size='2x'/>
                    </>
                    : (<FontAwesomeIcon icon={faPencil} onClick={() => !this.props.disabled && this.props.onEditClick()}
                                        size='2x'/>)}
                <FontAwesomeIcon icon={faTrash} onClick={() => !this.props.disabled && this.props.onDeleteClick()}
                                 size='2x'/>
            </div>
        );
    }
}

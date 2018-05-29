import React, {Component} from 'react';
import './ImageUpload.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import ApiImage from '../ApiImage/ApiImage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class ImageUpload extends Component {
    render() {
        return (
            <div className='ImgUpload'>
                {this.props.img ?
                    <>
                    <ApiImage src={this.props.img}/>
                    <FontAwesomeIcon icon={faTimes} size='2x' onClick={this.props.remove}/>
                    </> :
                    <>
                    <input type='file' className={`${this.props.error && 'error' || ''} file-input`}
                           onChange={event => this.props.fileSet(event.target.files[0])}/>
                    {this.props.error && <ErrorMessage>{this.props.error.msg}</ErrorMessage>}
                    </>
                }
            </div>
        );
    }
}

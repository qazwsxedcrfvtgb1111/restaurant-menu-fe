import React, {Component} from 'react';
import './Category.scss';
import CategoryEdit from './CategoryEdit/CategoryEdit';
import CategoryView from './CategoryView/CategoryView';

export default class Category extends Component {
    render() {
        if (this.props.editing) {
          return <CategoryEdit {...this.props} />;
        }
        return <CategoryView {...this.props} />
    }
}

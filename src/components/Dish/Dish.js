import React, {Component} from 'react';
import './Dish.scss';
import DishEdit from './DishEdit/DishEdit';
import DishView from './DishView/DishView';

export default class Dish extends Component {
    render() {
        if (this.props.editing) {
            return <DishEdit {...this.props} />;
        }

        return <DishView {...this.props}/>;
    }
}

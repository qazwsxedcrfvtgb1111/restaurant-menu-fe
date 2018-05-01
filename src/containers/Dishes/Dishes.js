import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDishes} from '../../actions/dishes';
import Dish from '../../components/Dish/Dish';
import Category from '../../components/Category/Category';
import {Link} from 'react-router-dom';

class Dishes extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDishes(+this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <Link to='/'>Back</Link>
        <Category {...this.props.category}/>
        {this.props.items.map(dish => <Dish {...dish} key={dish.id}/>)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {dishes} = state;
  const categoryId = +ownProps.match.params.id;
  return {
    category: state.categories.items.find(category => category.id === categoryId),
    fetching: dishes.fetching,
    items: dishes.items[categoryId] || []
  };
}

export default connect(mapStateToProps)(Dishes);

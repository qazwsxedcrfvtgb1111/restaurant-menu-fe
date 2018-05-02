import React, {Component} from 'react';
import {connect} from 'react-redux';
import Category from '../../components/Category/Category';
import {fetchCategories} from '../../actions/categories';
import './Categories.css';

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div className='Categories'>
        {this.props.categories.items.map(category => (
          <Category {...category} key={category.id}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {categories} = state;
  return {categories};
}

export default connect(mapStateToProps)(Categories);

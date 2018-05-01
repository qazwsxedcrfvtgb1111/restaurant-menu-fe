import React, {Component} from 'react';
import {connect} from 'react-redux';
import Category from '../../components/Category/Category';
import {fetchCategories} from '../../actions/categories';
import {Link} from 'react-router-dom';

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div>
        {this.props.categories.items.map(category => (
          <Link to={`category/${category.id}`} key={category.id}>
            <Category {...category}/>
          </Link>
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

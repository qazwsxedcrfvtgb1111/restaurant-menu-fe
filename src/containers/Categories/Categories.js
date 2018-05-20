import React, {Component} from 'react';
import {connect} from 'react-redux';
import Category from '../../components/Category/Category';
import {
    addCategory,
    cancelEditCategory,
    deleteCategory,
    editCategory,
    fetchCategories,
    saveCategory,
    setCategoryValue
} from '../../actions/categories';
import './Categories.scss';
import ControlIcons from '../../components/ControlIcons/ControlIcons';
import AddElement from '../../components/AddElement/AddElement';

class Categories extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        return (
            <div className='Categories'>
                {this.props.categories.items.map((category, index) => (
                    <div className='control-container' key={index}>
                        <Category {...category}
                                  onEdit={(prop, value) => this.props.dispatch(setCategoryValue(prop, value, category))}
                        />
                        {this.props.isAuthorized &&
                        <ControlIcons editing={category.editing}
                                      onEditClick={() => this.props.dispatch(editCategory(category))}
                                      onSaveClick={() => this.props.dispatch(saveCategory(category))}
                                      onCancelClick={() => this.props.dispatch(cancelEditCategory(category))}
                                      onDeleteClick={() => this.props.dispatch(deleteCategory(category))}/>}
                    </div>
                ))}
                {this.props.isAuthorized &&
                <AddElement onAdd={() => this.props.dispatch(addCategory())}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {categories} = state;
    return {categories, isAuthorized: !!state.auth.token};
}

export default connect(mapStateToProps)(Categories);

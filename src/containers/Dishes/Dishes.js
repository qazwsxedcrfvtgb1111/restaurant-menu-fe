import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    addDish,
    cancelEditDish,
    deleteDish,
    editDish,
    fetchDishes,
    MANIPULATE_DISH_IMAGE,
    saveDish,
    setDishValue
} from '../../actions/dishes';
import Dish from '../../components/Dish/Dish';
import Category from '../../components/Category/Category';
import './Dishes.scss';
import BackButton from '../../components/BackButton/BackButton';
import ControlIcons from '../../components/ControlIcons/ControlIcons';
import AddElement from '../../components/AddElement/AddElement';
import {removeImage, setImage} from '../../actions/images';

class Dishes extends Component {
    componentDidMount() {
        this.props.dispatch(fetchDishes(+this.props.match.params.id));
    }

    render() {
        return (
            <div className='Dishes'>
                <BackButton/>
                <Category {...this.props.category} />
                {this.props.items.length || this.props.fetching ? (
                    this.props.items.map((dish, index) =>
                        <div className='control-container' key={index}>
                            <Dish {...dish}
                                  errors={dish.errors || {}}
                                  onEdit={(prop, value) => this.props.dispatch(setDishValue(prop, value, dish))}
                                  removeImg={() => this.props.dispatch(removeImage(MANIPULATE_DISH_IMAGE, dish))}
                                  setImg={file => this.props.dispatch(setImage(file, MANIPULATE_DISH_IMAGE, dish))}
                                  authorized={this.props.isAuthorized}
                            />
                            {this.props.isAuthorized &&
                            <ControlIcons editing={dish.editing} disabled={dish.fetching}
                                          onEditClick={() => this.props.dispatch(editDish(dish))}
                                          onSaveClick={() => this.props.dispatch(saveDish(dish))}
                                          onCancelClick={() => this.props.dispatch(cancelEditDish(dish))}
                                          onDeleteClick={() => this.props.dispatch(deleteDish(dish))}/>}
                        </div>)
                ) : (
                    <div className='no-items'>No dishes in this category</div>
                )}
                {this.props.isAuthorized &&
                <AddElement onAdd={() => this.props.dispatch(addDish())}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {dishes} = state;
    const categoryId = +ownProps.match.params.id;
    return {
        category: state.categories.items.find(
            category => category.id === categoryId
        ),
        fetching: dishes.fetching || state.categories.fetching,
        items: dishes.items[categoryId] || [],
        isAuthorized: !!state.auth.token,
    };
}

export default connect(mapStateToProps)(Dishes);

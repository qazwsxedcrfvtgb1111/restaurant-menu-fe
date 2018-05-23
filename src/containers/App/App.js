import React, {Component} from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Categories from '../Categories/Categories';
import {Route, Switch, withRouter} from 'react-router-dom';
import Dishes from '../Dishes/Dishes';
import Login from '../Login/Login';
import {connect} from 'react-redux';
import {forgetToken} from '../../actions/auth';
import Footer from '../../components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header loggedIn={this.props.loggedIn} logout={() => this.props.dispatch(forgetToken())}/>
                <main>

                    <Switch>
                        <Route exact path='/' component={Categories}/>
                        <Route exact path='/category/:id' component={Dishes}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </main>
                {/*<Footer/>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: !!state.auth.token
    };
}

export default withRouter(connect(mapStateToProps)(App));
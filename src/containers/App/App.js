import React, {Component} from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Categories from '../Categories/Categories';
import {Route, Switch, withRouter} from 'react-router-dom';
import Dishes from '../Dishes/Dishes';
import Login from '../Login/Login';
import {connect} from 'react-redux';
import {forgetToken} from '../../actions/auth';
import {push} from 'react-router-redux';
import Users from '../Users/Users';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Orders from '../Orders/Orders';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header loggedIn={this.props.loggedIn} go={to => this.props.dispatch(push(to))}
                        logout={() => this.props.dispatch(forgetToken())}/>
                <main>
                    <Switch>
                        <Route exact path='/' component={Categories}/>
                        <Route exact path='/category/:id' component={Dishes}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/users' component={Users}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contacts' component={Contacts}/>
                        <Route exact path='/orders' component={Orders}/>
                    </Switch>
                </main>
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

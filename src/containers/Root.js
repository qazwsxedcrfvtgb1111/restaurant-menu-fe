import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {history, store} from '../store/index';
import {ConnectedRouter} from 'react-router-redux';
import App from './App/App';

export default class Root extends Component {
    render() {
        return <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    }
}
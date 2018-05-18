import React from 'react';
import ReactDOM from 'react-dom';
import './polyfill';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root';
import 'normalize.css';
import './styles.scss';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root';
import 'normalize.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

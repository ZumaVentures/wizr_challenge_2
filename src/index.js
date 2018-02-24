import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import store from './redux/store';
import routes from './routes';

import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root store={store}>{routes}</Root>, document.getElementById('root'));
registerServiceWorker();

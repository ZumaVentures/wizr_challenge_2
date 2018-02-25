import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Root from './Root';
import store from './redux/store';
import routes from './routes';

ReactDOM.render(<Root store={store}>{routes}</Root>, document.getElementById('root'));

registerServiceWorker();

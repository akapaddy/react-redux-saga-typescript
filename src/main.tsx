import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux';

import { AppContainer } from './app/';

ReactDOM.render(
    <Provider store={store} >
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
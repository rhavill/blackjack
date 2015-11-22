import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import Root from './components/Root';
import reducer from './reducer';
import setInitialState from './data/state';

let store = createStore(reducer, setInitialState());

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('blackjack')
);
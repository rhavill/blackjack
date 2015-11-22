import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from './reducer';
import Blackjack from './components/Blackjack';
import setInitialState from './data/state';

let store = createStore(reducer, setInitialState());

ReactDOM.render(
    <Provider store={store}>
        <Blackjack />
    </Provider>,
    document.getElementById('blackjack')
);
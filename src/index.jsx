import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Map} from 'immutable';
import {Provider} from 'react-redux'

import reducer from './reducer';
import Blackjack from './components/Blackjack';
import setInitialState from './data/state';
import cards from './data/cards';

let store = createStore(reducer, setInitialState());
//console.log('store', store.getState().get('turn'));

ReactDOM.render(
    <Provider store={store}>
        <Blackjack />
    </Provider>,
    document.getElementById('blackjack')
);
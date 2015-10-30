import React from 'react';
import ReactDOM from 'react-dom';
import {BlackjackContainer} from './components/Blackjack';
//import cards from './data/cards';
import {List, Map} from 'immutable';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import actionMiddleware from './action_middleware';
import {Provider} from 'react-redux';

let cards = List.of(
    Map({rank: '4', suit: 'S'}),
    Map({rank: '10', suit: 'S'}),
    Map({rank: '6', suit: 'S'}),
    Map({rank: '8', suit: 'S'}),
    Map({rank: '7', suit: 'S'})
);

const createStoreWithMiddleware = applyMiddleware(actionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: {
        deck: cards,
        hands: [ [], [] ],
        scores: [ [], [] ]
    }
});

ReactDOM.render(
    <Provider store={store}>
        <BlackjackContainer />
    </Provider>,
    document.getElementById('blackjack')
);
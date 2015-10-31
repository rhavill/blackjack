import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import actionMiddleware from './action_middleware';
import {setState} from './action_creators';
import {BlackjackContainer} from './components/Blackjack';
//import cards from './data/cards';

let cards = List.of(
    Map({rank: 'A', suit: 'S'}),
    Map({rank: '10', suit: 'S'}),
    Map({rank: '6', suit: 'S'}),
    Map({rank: '8', suit: 'S'}),
    Map({rank: '7', suit: 'S'})
);

const createStoreWithMiddleware = applyMiddleware(actionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch(setState({
    deck: cards,
    hands: [ [], [] ],
    scores: [ [], [] ]
}));

ReactDOM.render(
    <Provider store={store}>
        <BlackjackContainer />
    </Provider>,
    document.getElementById('blackjack')
);
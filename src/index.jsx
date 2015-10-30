import React from 'react';
import ReactDOM from 'react-dom';
import {BlackjackContainer} from './components/Blackjack';
//import cards from './data/cards';
import {List, Map} from 'immutable';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

let cards = List.of(
    Map({rank: 'A', suit: 'S'}),
    Map({rank: '10', suit: 'S'}),
    Map({rank: '6', suit: 'S'}),
    Map({rank: '8', suit: 'S'}),
    Map({rank: '7', suit: 'S'})
);

const store = createStore(reducer);
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
import React from 'react';
import ReactDOM from 'react-dom';
import {BlackjackContainer} from './components/Blackjack';
import cards from './data/cards';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        deck: cards
    }
});

ReactDOM.render(
    <Provider store={store}>
        <BlackjackContainer />
    </Provider>,
    document.getElementById('blackjack')
);
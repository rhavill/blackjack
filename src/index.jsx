import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import actionMiddleware from './action_middleware';
import {setInitialState} from './action_creators';
import {BlackjackContainer} from './components/Blackjack';

const createStoreWithMiddleware = applyMiddleware(actionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch(setInitialState());

ReactDOM.render(
    <Provider store={store}>
        <BlackjackContainer />
    </Provider>,
    document.getElementById('blackjack')
);
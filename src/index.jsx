import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import Root from './components/Root';
import reducer from './reducer';
import setInitialState from './data/state';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer, setInitialState());

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('blackjack')
);
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import cards from '../src/data/cards';

let jsState = {
    deck: [
        {rank: 'A', suit: 'C'},
        {rank: '4', suit: 'S'},
        {rank: 'T', suit: 'D'},
        {rank: '2', suit: 'H'},
        {rank: 'Q', suit: 'C'}
    ]
};

let immutableState = Map({
    deck: List.of(
        Map({rank: 'A', suit: 'C'}),
        Map({rank: '4', suit: 'S'}),
        Map({rank: 'T', suit: 'D'}),
        Map({rank: '2', suit: 'H'}),
        Map({rank: 'Q', suit: 'C'})
    )
});

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: immutableState
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS(jsState));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: jsState
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS(jsState));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: jsState
        };
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS(jsState));
    });

});

import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import cards from '../src/data/cards';
import setInitialState from '../src/data/state';

let jsDeck = [
    {rank: 'A', suit: 'C'},
    {rank: '4', suit: 'S'},
    {rank: 'T', suit: 'D'},
    {rank: '2', suit: 'H'},
    {rank: 'Q', suit: 'C'}
];

let immutableDeck = List.of(
    Map({rank: 'A', suit: 'C'}),
    Map({rank: '4', suit: 'S'}),
    Map({rank: 'T', suit: 'D'}),
    Map({rank: '2', suit: 'H'}),
    Map({rank: 'Q', suit: 'C'})
);

let jsState = {
    deck: jsDeck
};

let immutableState = Map({
    deck: immutableDeck
});

describe('reducer', () => {

    it('handles SET_INITIAL_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_INITIAL_STATE',
            state: immutableState
        };
        const nextState = reducer(initialState, action);
        expect(nextState.get('nextCardIndex')).to.equal(0);
        expect(nextState.get('turn')).to.equal(null);
        expect(nextState.get('deck').size).to.equal(52);
        expect(nextState.get('player').size).to.equal(0);
    });

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

    it('handles SET_TURN', () => {
        const initialState = Map();
        const action = {
            type: 'SET_TURN',
            turn: 'dealer'
        };
        const nextState = reducer(initialState, action);
        expect(nextState.get('turn')).to.equal('dealer');
    });

    it('handles SET_DECK', () => {
        const initialState = Map();
        const action = {
            type: 'SET_DECK',
            deck: immutableDeck
        };
        const nextState = reducer(initialState, action);
        expect(nextState.get('deck')).to.equal(fromJS(jsDeck));
    });

    it('handles DEAL_CARD', () => {
        const initialState = setInitialState();
        const action = {
            type: 'DEAL_CARD'
        };
        const nextState = reducer(initialState, action);
        expect(nextState.get('nextCardIndex')).to.equal(1);
        expect(nextState.get('player')).to.equal(fromJS([0]));
    });

});

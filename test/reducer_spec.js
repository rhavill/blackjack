import {List, Map, fromJS, toJS} from 'immutable';
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
        let action = {
            type: 'DEAL_CARD',
            cardIndex: 0
        };
        let nextState = reducer(initialState, action);
        action.cardIndex = nextState.get('nextCardIndex')
        expect(nextState.get('nextCardIndex')).to.equal(1);
        expect(nextState.get('player')).to.equal(fromJS([0]));
        expect(nextState.get('dealer')).to.equal(fromJS([]));

        // The fourth card dealt should be face down
        nextState = reducer(nextState, action)
        action.cardIndex = nextState.get('nextCardIndex')
        nextState = reducer(nextState, action)
        action.cardIndex = nextState.get('nextCardIndex')
        nextState = reducer(nextState, action)
        action.cardIndex = nextState.get('nextCardIndex')
        expect(action.cardIndex).to.equal(4)
        expect(nextState.getIn(['deck', 3, 'isFaceUp'])).to.equal(false);
        });

    it('handles PLAYER_CARD', () => {
        let initialState = setInitialState()
            .set('nextCardIndex', 4)
            .set('player', List([0, 2]));
        let action = {
            type: 'PLAYER_CARD',
            cardIndex: initialState.get('nextCardIndex')
        };
        let nextState = reducer(initialState, action);
        expect(nextState.get('player')).to.equal(fromJS([0, 2, 4]));
        expect(nextState.get('nextCardIndex')).to.equal(5);
    });

    it('handles DEALER_CARD', () => {
        let initialState = setInitialState()
            .set('nextCardIndex', 4)
            .set('dealer', List([1, 3]));
        let action = {
            type: 'DEALER_CARD',
            cardIndex: initialState.get('nextCardIndex')
        };
        let nextState = reducer(initialState, action);
        expect(nextState.get('dealer')).to.equal(fromJS([1, 3, 4]));
        expect(nextState.get('nextCardIndex')).to.equal(5);
    });

    it('handles DEALER_SHOW', () => {
        const initialState = setInitialState()
            .setIn(['deck', 3, 'isFaceUp'], false)
        const action = {
            type: 'DEALER_SHOW'
        };
        const nextState = reducer(initialState, action);
        expect(nextState.getIn(['deck', 3, 'isFaceUp'])).to.equal(true);
    });

    it('handles EMPTY_HANDS', () => {
        let initialState = setInitialState()
            .set('nextCardIndex', 4)
            .set('dealer', List([1, 3]))
            .set('player', List([0, 2]));
        let action = {
            type: 'EMPTY_HANDS'
        };
        let nextState = reducer(initialState, action);
        expect(nextState.get('nextCardIndex')).to.equal(0);
        expect(nextState.get('dealer')).to.equal(fromJS([]));
        expect(nextState.get('player')).to.equal(fromJS([]));
    });

});

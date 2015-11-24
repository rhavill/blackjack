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
        expect(nextState.getIn(['player', 'cards'])).to.equal(fromJS([0]));
        expect(nextState.getIn(['dealer', 'cards'])).to.equal(fromJS([]));

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

});

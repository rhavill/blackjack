import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import cards from '../src/data/cards';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                deck: List.of(
                    Map({rank: 'A', suit: 'C'}),
                    Map({rank: '4', suit: 'S'}),
                    Map({rank: '10', suit: 'D'}),
                    Map({rank: '2', suit: 'H'}),
                    Map({rank: 'Q', suit: 'C'})
                )
            })
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            deck: [
                {rank: 'A', suit: 'C'},
                {rank: '4', suit: 'S'},
                {rank: '10', suit: 'D'},
                {rank: '2', suit: 'H'},
                {rank: 'Q', suit: 'C'}
            ]
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                deck: [
                    {rank: 'A', suit: 'C'},
                    {rank: '4', suit: 'S'},
                    {rank: '10', suit: 'D'},
                    {rank: '2', suit: 'H'},
                    {rank: 'Q', suit: 'C'}
                ]
            }
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            deck: [
                {rank: 'A', suit: 'C'},
                {rank: '4', suit: 'S'},
                {rank: '10', suit: 'D'},
                {rank: '2', suit: 'H'},
                {rank: 'Q', suit: 'C'}
            ]
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                deck: [
                    {rank: 'A', suit: 'C'},
                    {rank: '4', suit: 'S'},
                    {rank: '10', suit: 'D'},
                    {rank: '2', suit: 'H'},
                    {rank: 'Q', suit: 'C'}
                ]
            }
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            deck: [
                {rank: 'A', suit: 'C'},
                {rank: '4', suit: 'S'},
                {rank: '10', suit: 'D'},
                {rank: '2', suit: 'H'},
                {rank: 'Q', suit: 'C'}
            ]
        }));
    });

    it('handles SHUFFLE', () => {
        const initialState = Map({
            deck: List.of(
                Map({rank: '4', suit: 'S'}),
                Map({rank: '5', suit: 'S'}),
                Map({rank: '6', suit: 'S'}),
                Map({rank: '7', suit: 'S'}),
                Map({rank: 'A', suit: 'H'}),
                Map({rank: 'A', suit: 'C'}),
                Map({rank: '10', suit: 'D'}),
                Map({rank: '2', suit: 'H'}),
                Map({rank: 'Q', suit: 'C'})
            )
        });

        const action = {
            type: 'SHUFFLE'
        };
        const nextState = reducer(initialState, action);

        expect(nextState.get('deck').size).to.equal(initialState.get('deck').size);
        expect(nextState).not.equal(fromJS({
            deck: [
                {rank: '4', suit: 'S'},
                {rank: '5', suit: 'S'},
                {rank: '6', suit: 'S'},
                {rank: '7', suit: 'S'},
                {rank: 'A', suit: 'H'},
                {rank: 'A', suit: 'C'},
                {rank: '10', suit: 'D'},
                {rank: '2', suit: 'H'},
                {rank: 'Q', suit: 'C'}
            ]
        }));
    });

    it('handles DEAL', () => {
        let deck = List.of(
            Map({rank: 'A', suit: 'S'}),
            Map({rank: '5', suit: 'S'}),
            Map({rank: '6', suit: 'S'}),
            Map({rank: '7', suit: 'S'}),
            Map({rank: 'A', suit: 'H'}),
            Map({rank: 'A', suit: 'C'}),
            Map({rank: '10', suit: 'D'}),
            Map({rank: '2', suit: 'H'}),
            Map({rank: 'Q', suit: 'C'})
        );
        const initialState = Map({deck: deck});
        const action = { type: 'DEAL' };
        const nextState = reducer(initialState, action);
        expect(nextState.get('deck').size).to.equal(initialState.get('deck').size - 4);
        expect(nextState.get('hands').size).to.equal(2);
        expect(nextState.get('hands').get(0).size).to.equal(2);
        expect(nextState.get('hands').get(1).size).to.equal(2);
        expect(nextState.get('hands').get(1).includes( Map({rank: '7', suit: 'S',isFaceUp:false}))).to.equal(true);
        expect(nextState.get('deck').includes( Map({rank: '4', suit: 'S'}))).to.equal(false);
        expect(nextState.get('scores').size).to.equal(2);
        expect(nextState.get('scores').get(0).size).to.equal(2);
        expect(nextState.get('scores').get(1).size).to.equal(1);
        expect(nextState.get('scores').get(0).contains(6)).to.equal(true);
        expect(nextState.get('scores').get(0).contains(16)).to.equal(true);
        expect(nextState.get('scores').get(1).contains(13)).to.equal(true);
    });

});

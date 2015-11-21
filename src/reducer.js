import {Map} from 'immutable';
import setInitialState from './data/state';

function setState(state, action) {
    return state.merge(action.state);
}

function turn(state, action) {
    switch (action.type) {
        case 'SET_TURN':
            return action.turn;
        default:
            return state;
    }
}

function deck(state, action) {
    switch (action.type) {
        case 'SET_DECK':
            return action.deck;
        default:
            return state;
    }
}

function player(state, action, cardIndex) {
    switch (action.type) {
        case 'DEAL':
            if (cardIndex % 2 == 0) {
                return state.push(cardIndex);
            }
        default:
            return state;
    }
}

function nextCardIndex(state, action) {
    switch (action.type) {
        case 'DEAL':
            return state + 1;
        default:
            return state;
    }
}

export default function(state, action) {
    state = state || Map();
    switch (action.type) {
        case 'SET_INITIAL_STATE':
            return setInitialState(state, action);
        case 'SET_STATE':
            return setState(state, action);
        default:
            return Map({
                deck: deck(state.get('deck'), action),
                turn: turn(state.get('turn'), action),
                player: player(state.get('player'), action, state.get('nextCardIndex')),
                nextCardIndex: nextCardIndex(state.get('nextCardIndex'), action)
            });
    }
    return state;
}
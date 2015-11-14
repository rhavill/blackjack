import {Map} from 'immutable';

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

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action);
        default:
            return Map({
                deck: deck(state.deck, action),
                turn: turn(state.turn, action)
            });
    }
    return state;
}
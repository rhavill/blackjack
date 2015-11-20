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

function player(state, action) {
    switch (action.type) {
        case 'DEAL_PLAYER_CARD':
            return state.push(action.card);
        default:
            return state;
    }
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_INITIAL_STATE':
            return setInitialState(state, action);
        case 'SET_STATE':
            return setState(state, action);
        default:
            return Map({
                deck: deck(state.deck, action),
                turn: turn(state.turn, action)
                //player: player(state.player)
            });
    }
    return state;
}
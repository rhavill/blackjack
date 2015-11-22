import {Map} from 'immutable';

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
        case 'DEAL_CARD':
            if (action.cardIndex % 2 == 0) {
                let nextState = state.push(action.cardIndex);
                console.log(nextState);
                return nextState;
            }
        default:
            return state;
    }
}

function nextCardIndex(state, action) {
    switch (action.type) {
        case 'DEAL_CARD':
            return state + 1;
        default:
            return state;
    }
}

export default function(state, action) {
    state = state || Map();
    switch (action.type) {
        default:
            return Map({
                deck: deck(state.get('deck'), action),
                turn: turn(state.get('turn'), action),
                player: player(state.get('player'), action),
                nextCardIndex: nextCardIndex(state.get('nextCardIndex'), action)
            });
    }
    return state;
}
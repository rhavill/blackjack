import {List, Map} from 'immutable';

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
        case 'DEAL_CARD':
            if (action.cardIndex == 3) {
                let nextState = state.setIn([3, 'isFaceUp'], false)
                return nextState;

            }
        case 'DEALER_SHOW':
            return state.setIn([3, 'isFaceUp'], true)
        default:
            return state;
    }
}

function dealer(state, action) {
    switch (action.type) {
        case 'DEAL_CARD':
            if (action.cardIndex % 2 == 1 && action.cardIndex < 4) {
                let nextState = state.push(action.cardIndex)
                return nextState;
            }
            break
        case 'DEALER_CARD':
            return state.push(action.cardIndex)
        case 'EMPTY_HANDS':
            return List()
        default:
            return state;
    }
    return state
}

function player(state, action) {
    switch (action.type) {
        case 'DEAL_CARD':
            if (action.cardIndex % 2 == 0 && action.cardIndex < 3) {
                let nextState = state.push(action.cardIndex)
                return nextState;
            }
            break
        case 'PLAYER_CARD':
            return state.push(action.cardIndex)
        case 'EMPTY_HANDS':
            return List()
        default:
            return state;
    }
    return state
}

function nextCardIndex(state, action) {
    switch (action.type) {
        case 'DEAL_CARD':
        case 'PLAYER_CARD':
        case 'DEALER_CARD':
            return state + 1;
        case 'EMPTY_HANDS':
            return 0
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
                dealer: dealer(state.get('dealer'), action),
                player: player(state.get('player'), action),
                nextCardIndex: nextCardIndex(state.get('nextCardIndex'), action)
            });
    }
    return state;
}
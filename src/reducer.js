import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function randomSorter(a, b) {
    // For secure random numbers, use window.crypto.getRandomValues() instead
    let r = Math.random();
    if (r < 0.5)
        return -1;
    return 1;
}
function shuffle(state) {
    return Map({deck: state.get('deck').sort(randomSorter)});
}
export default function(state = Map(), action = {type:'none'}) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SHUFFLE':
            return shuffle(state);
    }
    return state;
}
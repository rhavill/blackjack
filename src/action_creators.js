export function setState(state) {
    return {
        type: 'SET_STATE',
        state: state
    }
}

export function setInitialState(state) {
    return {
        type: 'SET_INITIAL_STATE',
        state: state
    }
}

export function shuffle() {
    return {
        type: 'SHUFFLE'
    };
}

export function deal() {
    return {
        type: 'DEAL'
    };
}

export function hit() {
    return {
        type: 'HIT'
    };
}

export function stay() {
    return {
        type: 'STAY'
    };
}

export function dealerShow() {
    return {
        type: 'DEALER_SHOW'
    };
}

export function dealerTurn() {
    return {
        type: 'DEALER_TURN'
    };
}

export function resetDeck() {
    return {
        type: 'RESET_DECK'
    };
}
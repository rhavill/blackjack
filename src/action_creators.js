export function setState(state) {
    return {
        type: 'SET_STATE',
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

export function dealerTurn() {
    return {
        type: 'DEALER_TURN'
    };
}
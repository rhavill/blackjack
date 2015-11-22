export function setState(state) {
    return {
        type: 'SET_STATE',
        state: state
    }
}

export function setTurn(turn) {
    return {
        type: 'SET_TURN',
        turn
    }
}

export function setDeck(deck) {
    return {
        type: 'SET_DECK ',
        deck
    }
}

export function deal() {
    // Deal four cards
    return (dispatch) => {
        dealNextCard(dispatch)
            .then(() => dealNextCard(dispatch))
            .then(() => dealNextCard(dispatch))
            .then(() => dealNextCard(dispatch))
    };
}
export function dealCard() {
    return {
        type: 'DEAL_CARD'
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

function dealNextCard(dispatch) {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            dispatch({type:'DEAL_CARD'})
            resolve();
        }, 500)
    })
    return promise
}
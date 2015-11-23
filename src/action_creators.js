
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
    return (dispatch, getState) => {
        dispatch({type:'SET_TURN', turn:'player'})
        dealNextCard(dispatch, getState)
            .then(() => dealNextCard(dispatch, getState))
            .then(() => dealNextCard(dispatch, getState))
            .then(() => dealNextCard(dispatch, getState))
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

function dealNextCard(dispatch, getState) {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            let cardIndex = getState().get('nextCardIndex');
            dispatch({
                type:'DEAL_CARD',
                cardIndex
            })
            resolve();
        }, 500)
    })
    return promise
}
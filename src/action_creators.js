import {getScores} from './utilities/functions'

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
    return (dispatch, getState) => {
        delayedDispatch(dispatch, {
            type:'PLAYER_CARD',
            cardIndex: getState().get('nextCardIndex')
        }).then(() => {
            const state = getState()
            let scores = getScores(state.get('deck'), state.get('player'))
            if (scores.get(0) ==  'BUST' || scores.get(0) > 20) {
                dispatch({
                    type: 'SET_TURN',
                    turn: 'dealer'
                })
            }
        })
    }
}

export function stay() {
    return (dispatch) => {
        dispatch({
            type: 'SET_TURN',
            turn: 'dealer'
        })
    }
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

function delayedDispatch(dispatch, action) {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            dispatch(action)
            resolve()
        }, 1000)
    })
    return promise
}

function dealNextCard(dispatch, getState) {
    let cardIndex = getState().get('nextCardIndex');
    return delayedDispatch(dispatch, {
        type:'DEAL_CARD',
        cardIndex
    });
}
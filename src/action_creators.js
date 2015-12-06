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
        dispatch({type:'SET_TURN', turn:'dealing'})
        dealNextCard(dispatch, getState)
            .then(() => dealNextCard(dispatch, getState))
            .then(() => dealNextCard(dispatch, getState))
            .then(() => dealNextCard(dispatch, getState))
            .then(() => {dispatch({type:'SET_TURN', turn:'player'})})
    };
}

export function hit() {
    return (dispatch, getState) => {
        dispatch({type:'SET_TURN', turn:'dealing'})
        delayedDispatch(dispatch, {
            type:'PLAYER_CARD',
            cardIndex: getState().get('nextCardIndex')
        }).then(() => {
            const state = getState()
            let scores = getScores(state.get('deck'), state.get('player'))
            if (scores.get(0) ==  'BUST' || scores.get(0) > 20) {
                dealerTurn(dispatch, getState)
            }
            else {
                dispatch({type:'SET_TURN', turn:'player'})
            }
        })
    }
}

export function stay() {
    return (dispatch, getState) => {
        dealerTurn(dispatch, getState)
    }
}

export function dealerTurn(dispatch, getState) {
    dispatch({
        type: 'SET_TURN',
        turn: 'dealer'
    })
    dispatch({
        type: 'DEALER_SHOW'
    })
    dealerPlay(dispatch, getState)
}


function dealerPlay(dispatch, getState) {
    let scores = getScores(getState().get('deck'), getState().get('dealer'))
    let maxScore = scores.reduce((previous, current) => {
        return current > previous ? current : previous
    }, 0)
    if (maxScore < 17 && maxScore != 'BUST') {
        delayedDispatch(dispatch, {
            type: 'DEALER_CARD',
            cardIndex: getState().get('nextCardIndex')
        }).then(() => {
            dealerPlay(dispatch, getState)
        })
    }
    else {
        dispatch({type:'SET_TURN', turn:'fini'})
    }
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
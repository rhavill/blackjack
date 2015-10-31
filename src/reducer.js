import {Map, List, fromJS} from 'immutable';
import {pointValue} from './data/cards';

function setState(state, newState) {
    return state.merge(newState);
}

function shuffle(state) {
    let deck = state.get('deck');
    let minIndex = 0, maxIndex = deck.size - 1;
    deck.map(function (card, index) {
        let newIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
        if (index != newIndex) {
            card = deck.get(index);
            let swapCard = deck.get(newIndex);
            deck = deck.set(newIndex, card).set(index, swapCard);
        }

    });
    return state.set('deck', deck);
}

function deal(state) {
    let turn = 'player';
    let deck = state.get('deck').skip(4);
    // First 3 cards are face-up. Last card is face-down.
    let hands =  List().push(
        state.get('deck').take(2).setIn([0,'isFaceUp'],true).setIn([1,'isFaceUp'],true)
    ).push(
        state.get('deck').slice(2,4).setIn([0,'isFaceUp'],true).setIn([1,'isFaceUp'],false)
    );
    let scores = getScores(hands);
    if (scores.get(0).get(1) == 21) {
        turn = 'dealer';
    }
    return state.set('deck', deck).set('hands', hands).set('scores', scores).set('turn', turn);
}

function dealerTurn(state) {
    let scores = getScores(state.get('hands'));
    console.log('dealer turn reducer',scores);
    return state.setIn(['hands', 1, 1, 'isFaceUp'], true);
}

function hit(state) {
    let newDeck = state.get('deck').skip(1);
    let playerHand = state.get('hands').get(0);
    let newCard = state.get('deck').take(1).get(0).set('isFaceUp', true);
    let newPlayerHand = playerHand.push(newCard);
    let newHands = state.get('hands').set(0, newPlayerHand);
    let scores = getScores(newHands);
    return state.set('deck',newDeck).set('hands', newHands).set('scores', scores);
}

export default function(state = Map(), action = {type:'none'}) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SHUFFLE':
            return shuffle(state);
        case 'DEAL':
            return deal(state);
        case 'HIT':
            return hit(state);
        case 'DEALER_TURN':
            return dealerTurn(state);
    }
    return state;
}

function getScores(hands) {
    let scores = [];
    for (let i = 0; i < hands.size; i++) {
        scores[i] = [];
        let hasAce = false;
        let minScore = hands.get(i).reduce(function (total, card) {
            if (card.get('rank') == 'A') {
                hasAce = true;
                return total + 1;
            }
            else {
                return total + pointValue[card.get('rank')];
            }
        }, 0);
        scores[i].push(minScore);
        if (hasAce) {
            scores[i].push(minScore + 10);
        }
    }
    return fromJS(scores);
}
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
    let deck = state.get('deck').skip(4);
    // First 3 cards are face-up. Last card is face-down.
    let hands =  List().push(
        state.get('deck').take(2).setIn([0,'isFaceUp'],true).setIn([1,'isFaceUp'],true)
    ).push(
        state.get('deck').slice(2,4).setIn([0,'isFaceUp'],true).setIn([1,'isFaceUp'],false)
    );
    let scores = getScores(hands);
    return state.set('deck', deck).set('hands', hands).set('scores', scores).set('turn', 'player');
}

export default function(state = Map(), action = {type:'none'}) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SHUFFLE':
            return shuffle(state);
        case 'DEAL':
            return deal(state);
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
import {Map, List} from 'immutable';

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
    return state.set('deck', deck).set('hands', hands);
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
import {Map} from 'immutable';

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
            deck = deck.set(newIndex, card);
            deck = deck.set(index, swapCard);
        }

    });
    return state.set('deck', deck);
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
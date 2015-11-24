import {Map, List} from 'immutable';
import cards from './cards';

export default function setInitialState() {
    return Map({
        nextCardIndex: 0,
        deck: List(cards),
        turn: null,
        dealer: Map({
            cards: List([]),
            scores: List([])
        }),
        player: Map({
            cards: List([]),
            scores: List([])
        })
    });
}

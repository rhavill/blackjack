import {Map, List} from 'immutable';
import cards from './cards';

export default function setInitialState() {
    return Map({
        nextCardIndex: 0,
        deck: List(cards),
        turn: null,
        dealer: List([]),
        player: List([])
    });
}

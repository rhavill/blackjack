import React, {Component} from 'react';
import {List, Map} from 'immutable'
import Buttons from './Buttons';
import Player from './Player';
import Deck from './Deck';

export default class Table extends Component {

    getCards() {
        return {
            dealer: this.props.dealer.get('cards').map((cardIndex) => {
                return this.props.deck.get(cardIndex)
            }),
            player: this.props.player.get('cards').map((cardIndex) => {
                return this.props.deck.get(cardIndex)
            })
        }
    }

    render() {
        return <div>
            <Player ref="dealer" isDealer={true} cards={this.getCards().dealer} />
            <Player ref="player" isDealer={false} cards={this.getCards().player} />
            <Buttons turn={this.props.turn} deal={this.props.deal}/>
            <div style={{clear: 'both', marginTop: 20}} />
            <Deck deck={this.props.deck} />
        </div>;
    }
}

Table.defaultProps = {
    deck: List([]),
    player: Map({
        cards: List([]),
        scores: List([])
    }),
    dealer: Map({
        cards: List([]),
        scores: List([])
    }),
    turn: null
};


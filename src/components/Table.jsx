import React, {Component} from 'react';
import {List, Map} from 'immutable'

import Buttons from './Buttons';
import Player from './Player';
import Deck from './Deck';

import {getScores} from '../utilities/functions'

export default class Table extends Component {

    getCards() {
        let cards = {
            dealer: this.props.dealer.map((cardIndex) => {
                return this.props.deck.get(cardIndex)
            }),
            player: this.props.player.map((cardIndex) => {
                return this.props.deck.get(cardIndex)
            })
        }
        return cards
    }

    render() {
        return <div>
            <Player ref="dealer" isDealer={true}
                    turn={this.props.turn}
                    scores={getScores(this.props.deck, this.props.dealer)}
                    cards={this.getCards().dealer} />
            <Player ref="player" isDealer={false}
                    turn={this.props.turn}
                    scores={getScores(this.props.deck, this.props.player)}
                    cards={this.getCards().player} />
            <Buttons turn={this.props.turn} deal={this.props.deal}
                hit={this.props.hit} />
            <Deck deck={this.props.deck} />
        </div>;
    }
}

Table.defaultProps = {
    deck: List([]),
    player: List([]),
    dealer: List([]),
    turn: null
};


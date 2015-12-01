import React, {Component} from 'react';
import {List, Map} from 'immutable'

import Buttons from './Buttons';
import Player from './Player';
import Deck from './Deck';

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

    getScores(cardIndexes) {
        let aceCount = 0, minScore = 0;
        const deck = this.props.deck
        cardIndexes.map((index) => {
            let card = deck.get(index)
            if (card.get('rank') == 'A') {
                aceCount++
            }
            minScore += card.get('points')
        })
        let scores = [minScore]
        if (aceCount) {
            scores.push(minScore + 10)
            if (aceCount == 3 && cards.size == 3) {
                scores.push(21)
            }

        }
        return List(scores);
    }

    render() {
        return <div>
            <Player ref="dealer" isDealer={true} cards={this.getCards().dealer} />
            <Player ref="player" isDealer={false} cards={this.getCards().player} />
            <Buttons turn={this.props.turn} deal={this.props.deal}/>
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


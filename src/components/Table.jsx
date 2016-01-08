import React, {Component} from 'react';
import {List, Map} from 'immutable'

import Buttons from './Buttons';
import Player from './Player';

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

    getPlayerScores() {
        if (this.props.turn == 'fini') {
            return List([this.getPlayerStatus()])
        }
        return getScores(this.props.deck, this.props.player)
    }

    getPlayerStatus() {
        let status = 'PUSH'
        let dealerScores = getScores(this.props.deck, this.props.dealer)
        let playerScores = getScores(this.props.deck, this.props.player)
        let dealerBust = (dealerScores.get(0) == 'BUST')
        let playerBust = (playerScores.get(0) == 'BUST')
        if (dealerBust || playerBust) {
            if (dealerBust && !playerBust) {
                status = 'WIN'
            }
            else if (!dealerBust && playerBust) {
                status = 'LOSE'
            }
        }
        else {
            let bestPlayerScore = playerScores.reduce((previous, next) => {
                return (next < 22 && next > previous) ? next : previous
            }, 0)
            let bestDealerScore = dealerScores.reduce((previous, next) => {
                return (next < 22 && next > previous) ? next : previous
            }, 0)
            if (bestPlayerScore < bestDealerScore) {
                status = 'LOSE'
            }
            else if (bestPlayerScore > bestDealerScore) {
                status = 'WIN'
            }
        }
        return status
    }

    render() {
        const handWidth = 200
        return <div className="table">
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <div id="dealer-container" style={{width:handWidth}}>
                    <Player ref="dealer" isDealer={true}
                            turn={this.props.turn}
                            scores={getScores(this.props.deck, this.props.dealer)}
                            cards={this.getCards().dealer} />
                </div>
                <div id="player-container" style={{display:'flex',flexDirection:'column',width:handWidth}}>
                    <Player ref="player" isDealer={false}
                            turn={this.props.turn}
                            scores={this.getPlayerScores()}
                            cards={this.getCards().player} />
                    <Buttons turn={this.props.turn} deal={this.props.deal}
                        hit={this.props.hit} stay={this.props.stay} />
                </div>
            </div>
        </div>;
    }
}

Table.defaultProps = {
    deck: List([]),
    player: List([]),
    dealer: List([]),
    turn: null
};


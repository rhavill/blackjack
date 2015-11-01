import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Dealer from './Dealer';
import Player from './Player';

export const Blackjack = React.createClass({
    mixins: [PureRenderMixin],
    getCards: function() {
        return this.props.cards || [];
    },
    isNotPlayerTurn: function() {
        let notPlayerTurn = false;
        if (this.props.turn != 'player') {
            notPlayerTurn = true;
        }
        return notPlayerTurn;
    },
    getWinner: function() {
        let winner = null;
        if (this.props.turn == 'fini') {
            let dealerScore = 0, playerScore = 0;
            if (this.props.dealerScores.length > 1 && this.props.dealerScores[1] < 22) {
                dealerScore = this.props.dealerScores[1];
            }
            else if (this.props.dealerScores[0] < 22) {
                dealerScore = this.props.dealerScores[0];
            }
            if (this.props.playerScores.length > 1 && this.props.playerScores[1] < 22) {
                playerScore = this.props.playerScores[1];
            }
            else if (this.props.playerScores[0] < 22) {
                playerScore = this.props.playerScores[0];
            }
            if (dealerScore > playerScore) {
                winner = 'dealer';
            }
            else if (dealerScore < playerScore) {
                winner = 'player';
            }
            else {
                winner = 'push';
            }
        }
        return winner;
    },
    render: function() {
        return <div>
            <button onClick={this.props.shuffle}>Shuffle</button>
            <button onClick={this.props.deal}>Deal</button>
            <button disabled={this.isNotPlayerTurn()} onClick={this.props.hit}>Hit</button>
            <button disabled={this.isNotPlayerTurn()} onClick={this.props.stay}>Stay</button>
            {this.getWinner() ? <h1>winner {this.getWinner()}</h1> : ''}
            <Dealer turn={this.props.turn} cards={this.props.dealerCards} scores={this.props.dealerScores} />
            <Player cards={this.props.playerCards} scores={this.props.playerScores} />
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        cards: state.get('deck').toJS(),
        dealerCards: state.get('hands').get(1).toJS(),
        playerCards: state.get('hands').get(0).toJS(),
        turn: state.get('turn'),
        dealerScores: state.get('scores').get(1).toJS(),
        playerScores: state.get('scores').get(0).toJS()
    };
}

export const BlackjackContainer = connect(mapStateToProps, actionCreators)(Blackjack);
import React from 'react/addons';

import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Dealer from './Dealer';
import Player from './Player';

export const Blackjack = React.createClass({
    mixins: [React.addons.PureRenderMixin],
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
    render: function() {
        return <div>
            <button onClick={this.props.shuffle}>Shuffle</button>
            <button onClick={this.props.deal}>Deal</button>
            <button disabled={this.isNotPlayerTurn()} onClick={this.props.hit}>Hit</button>
            <button disabled={this.isNotPlayerTurn()} onClick={this.props.stay}>Stay</button>
            <Dealer cards={this.props.dealerCards} scores={this.props.dealerScores} />
            <Player cards={this.props.playerCards} scores={this.props.playerScores} />
            {this.getCards().map(card =>
                    <h1 key={card.rank+card.suit}>{card.rank} of {card.suit}</h1>
            )}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        //cards: state.getIn(['vote', 'pair']),
        cards: state.get('deck').toJS(),
        dealerCards: state.get('hands').get(1).toJS(),
        playerCards: state.get('hands').get(0).toJS(),
        turn: state.get('turn'),
        dealerScores: state.get('scores').get(1).toJS(),
        playerScores: state.get('scores').get(0).toJS()
    };
}

export const BlackjackContainer = connect(mapStateToProps, actionCreators)(Blackjack);
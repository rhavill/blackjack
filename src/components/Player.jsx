import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {List} from 'immutable'

import Hand from './Hand';
import Scores from './Scores'

export default class Player extends Component {

    showScores() {
        return this.props.scores.size  && (
            !this.props.isDealer ||
            this.props.turn == 'dealer' ||
            this.props.turn == 'fini'
        )
    }

    render() {
        return <div style={{minHeight: 130}}>
            <Hand cards={this.props.cards} />
            { this.showScores() ?
                <Scores scores={this.props.scores}/> : '' }
        </div>
    }
}

Player.defaultProps = {
    isDealer: false,
    turn: null,
    cards: List(),
    scores: List()
}
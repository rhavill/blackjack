import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {List} from 'immutable'

import Hand from './Hand';
import Scores from './Scores'

export default class Player extends Component {

    render() {
        return <div style={{minHeight: 130}}>
            <Hand cards={this.props.cards} />
            { this.props.scores.size ?
                <Scores scores={this.props.scores}/> : '' }
        </div>
    }
}

Player.defaultProps = {
    isDealer: false,
    cards: List(),
    scores: List()
}
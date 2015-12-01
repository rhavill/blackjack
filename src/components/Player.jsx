import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {List} from 'immutable'

import Hand from './Hand';
import Scores from './Scores'

export default class Player extends Component {

    render() {
        return <div style={{minHeight: 130}}>
            <Scores scores={this.props.scores} />
            <Hand cards={this.props.cards} />
        </div>
    }
}

Player.defaultProps = {
    isDealer: false,
    cards: List(),
    scores: List()
}
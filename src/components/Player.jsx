import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Hand from './Hand';

export default class Player extends Component {

    render() {
        return <div>
            <Hand cards={this.props.cards} />
        </div>
    }
}

Player.defaultProps = {
    isDealer: false,
    cards: []
}
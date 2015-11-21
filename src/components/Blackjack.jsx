import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux'

import Card from './Card';

class Blackjack extends Component {

    getCards() {
        return this.props.cards;
    }

    render() {
        return <div style={{backgroundColor:'green'}}>
            {this.getCards().map(card =>
                <ReactCSSTransitionGroup   key={card.id}
                          transitionName="fadein"
                          transitionAppear={true}
                          transitionAppearTimeout={500}
                          transitionEnter={false}
                          transitionLeave={false}>
                    <Card key={card.id} {...card} />
                </ReactCSSTransitionGroup>
            )}
        </div>;
    }
}

function select(state) {
    return {
        turn: state.get('turn'),
        cards: state.get('deck')
    }
}

Blackjack.defaultProps = {
    cards: []
};

export default connect(select)(Blackjack)
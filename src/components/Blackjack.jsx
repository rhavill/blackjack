import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Card from './Card';

export default class Blackjack extends Component {

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

Blackjack.defaultProps = {
    cards: []
};
import React, {Component} from 'react';
import Card from './Card';

export default class Blackjack extends Component {

    getCards() {
        return this.props.cards;
    }

    render() {
        return <div style={{backgroundColor:'green'}}>
            {this.getCards().map(card =>
                    <Card key={card.id} {...card} />
            )}
        </div>;
    }
}

Blackjack.defaultProps = {
    cards: []
};
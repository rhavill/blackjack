import React, {Component} from 'react';
import Card from './Card';

export default class Blackjack extends Component {
    getCards() {
        return this.props.cards || [];
    }

    render() {
        return <div className="cards">
            {this.getCards().map(card =>
                <Card key={card.id} card={card} />
            )}
        </div>;
    }
}
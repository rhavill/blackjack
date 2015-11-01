import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from './Card';
import Score from './Score';

export default class Dealer extends React.Component {
    getCards() {
        return this.props.cards || [];
    }

    render() {
        let cards = this.getCards();
        let showScore = false
        if (cards.length > 1 && cards[1].isFaceUp == true) {
            showScore = true;
        }
        return (
            <div id="dealer">
                <h1>dealer</h1>
                {showScore ?
                    <Score {...this.props} /> : ''}
                {cards.map(card => <Card key={card.rank+card.suit} card={card} />
                )}
            </div>
        )
    }
}

Dealer.mixins = [PureRenderMixin];
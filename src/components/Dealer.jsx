import React from 'react';

import Card from './Card';
import Score from './Score';

export default class Dealer extends React.Component {
    getCards() {
        return this.props.cards || [];
    }

    render() {
        return (
            <div id="dealer">
                <h1>dealer</h1>
                {this.props.turn == 'dealer' ?
                    <Score {...this.props} /> : ''}
                {this.getCards().map(card => <Card key={card.rank+card.suit} card={card} />
                )}
            </div>
        )
    }
}
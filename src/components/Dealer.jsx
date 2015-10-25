import React from 'react';

export default class Dealer extends React.Component {
    getCards() {
        return this.props.dealerCards || [];
    }

    render() {
        return (
            <div id="dealer">
                <h1>dealer</h1>
                {this.getCards().map(card =>
                        <h2 key={card.rank+card.suit}>{card.rank} of {card.suit} (dealer)</h2>
                )}
            </div>
        )
    }
}
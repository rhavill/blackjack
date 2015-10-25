import React from 'react';

import Card from './Card';

export default class Player extends React.Component {
    getCards() {
        return this.props.cards || [];
    }

    render() {
        return (
            <div id="player">
                <h1>player</h1>
                {this.getCards().map(card => <Card key={card.rank+card.suit} card={card} />
                )}
            </div>
        )
    }
}
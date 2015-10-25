import React from 'react';

import Card from './Card';

export default class Dealer extends React.Component {
    getCards() {
        return this.props.cards || [];
    }

    render() {
        return (
            <div id="dealer">
                <h1>dealer</h1>
                {this.getCards().map(card => <Card card={card} />
                )}
            </div>
        )
    }
}
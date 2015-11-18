import React from 'react';
import Card from './Card';

export default React.createClass({
    getCards: function() {
        return this.props.cards || [];
    },
    render: function() {
        return <div className="cards">
            {this.getCards().map(card =>
                <Card key={card.id} card={card} />
            )}
        </div>;
    }
});
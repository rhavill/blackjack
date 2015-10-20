import React from 'react';

export default React.createClass({
    getCards: function() {
        return this.props.cards || [];
    },
    render: function() {
        return <div className="cards">
            {this.getCards().map(card =>
                    <h1>{card.rank} of {card.suit}</h1>
            )}
        </div>;
    }
});
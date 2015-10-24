import React from 'react/addons';

export default React.createClass({
    mixins: [React.addons.PureRenderMixin],
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
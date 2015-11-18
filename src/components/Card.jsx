import React from 'react';

export default React.createClass({
    render: function() {
        let style = {
            float: 'left',
            backgroundImage: 'url("cards.png")',
            height: this.props.card.height,
            width: this.props.card.width
        };
        style.backgroundPosition = this.props.card.isFaceUp ?
            this.props.card.backgroundPosition :
            '0px ' + this.props.card.height;
        return <div style={style} className="card"  />;
    }
});
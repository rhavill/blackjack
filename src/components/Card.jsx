import React from 'react';

export default React.createClass({
    render: function() {
        let style = {
            float: 'left',
            backgroundImage: 'url("cards.png")',
            height: '123px',
            width: '79px'
        };
        style.backgroundPosition = this.props.card.isFaceUp ?
            this.props.card.backgroundPosition :
            '0px 123px';
        return <div style={style} className="card" />;
    }
});
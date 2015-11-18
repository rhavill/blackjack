import React, {Component} from 'react';

export default class Card extends Component {
    render() {
        let style = {
            float: 'left',
            backgroundImage: 'url("cards.png")',
            height: '123px',
            width: '79px'
        };
        style.backgroundPosition = this.props.isFaceUp ?
            this.props.backgroundPosition :
            '0px 123px';
        return <div style={style} className="card" />;
    }
}
import React from 'react';

export default class Card extends React.Component {

    constructor() {
        super();
        this.suitSymbol = { C: '♣', D: '♦', H: '♥', S: '♠' };
    }

    isFaceUp() {
        return this.props.card.isFaceUp;
    }

    isRedSuit(suit) {
        return (suit == 'H' || suit == 'D') ? true : false;
    }

    render() {
        let rank = this.props.card.rank;
        let suit = this.suitSymbol[this.props.card.suit];
        return (
            <div className="card">
                {this.isFaceUp() ?
                    <div className="front">
                        <div className="index">{rank}<br/>{suit}</div>
                        <div className="ace">{suit}</div>
                        <div className="bottom-index">{rank}<br/>{suit}</div>
                    </div> :
                    null
                }
            </div>
        )
    }
}
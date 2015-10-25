import React from 'react';
import {suitSymbol} from '../data/card';

export default class Card extends React.Component {

    isFaceUp() {
        return this.props.card.isFaceUp;
    }

    render() {
        let rank = this.props.card.rank;
        let suit = suitSymbol(this.props.card.suit);
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
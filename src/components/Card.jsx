import React from 'react';
import {suitSymbol} from '../data/card';

export default class Card extends React.Component {

    render() {
        let rank = this.props.card.rank;
        let suit = suitSymbol(this.props.card.suit);
        return (
            <div className="card">
                <div className="front">
                    <div className="index">{rank}<br/>{suit}</div>
                    <div className="ace">{suit}</div>
                    <div className="bottom-index">{rank}<br/>{suit}</div>
                </div>
            </div>
        )
    }
}
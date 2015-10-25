import React from 'react';

export default class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <h2>card</h2>
                <h3 key={this.props.card.rank+this.props.card.suit}>{this.props.card.rank} of {this.props.card.suit} (card)</h3>
            </div>
        )
    }
}
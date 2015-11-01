import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from './Card';
import Score from './Score';

export default class Dealer extends React.Component {
    getCards() {
        return this.props.cards || [];
    }

    render() {
        return (
            <div id="dealer">
                <h1>dealer</h1>
                {this.props.turn == 'dealer' || this.props.turn == 'fini' ?
                    <Score {...this.props} /> : ''}
                {this.getCards().map(card => <Card key={card.rank+card.suit} card={card} />
                )}
            </div>
        )
    }
}

Dealer.mixins = [PureRenderMixin];
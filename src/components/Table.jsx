import React, {Component} from 'react';

import Buttons from './Buttons';
import Player from './Player';
import Deck from './Deck';

export default class Table extends Component {

    getCards() {
        return this.props.deck;
    }

    render() {
        return <div>
            <Player ref="dealer" isDealer={true} />
            <Player ref="player" isDealer={false} />
            <Buttons turn={this.props.turn} deal={this.props.deal}/>
            <div style={{clear: 'both', marginTop: 20}} />
            <Deck deck={this.props.deck} />
        </div>;
    }
}

Table.defaultProps = {
    deck: []
};


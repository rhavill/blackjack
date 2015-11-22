import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Card from './Card';
import Buttons from './Buttons';
import Player from './Player';

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
            {this.getCards().map(card =>
                <ReactCSSTransitionGroup   key={card.id}
                          transitionName="fadein"
                          transitionAppear={true}
                          transitionAppearTimeout={500}
                          transitionEnter={false}
                          transitionLeave={false}>
                    <Card key={card.id} {...card} />
                </ReactCSSTransitionGroup>
            )}
        </div>;
    }
}

Table.defaultProps = {
    deck: []
};


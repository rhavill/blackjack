import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Card from './Card';
import Button from './Button';

export default class Blackjack extends Component {

    getCards() {
        return this.props.cards;
    }

    getUsableButtons() {
        switch (this.props.turn) {
            case null:
                return ['deal'];
            case 'player':
                return ['hit', 'stay'];
            default:
                return [];
        }
    }

    render() {
        return <div>
            <ReactCSSTransitionGroup transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                {this.getUsableButtons().map((text) => {
                    return <Button key={text} text={text}/>
                })}
            </ReactCSSTransitionGroup>
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

Blackjack.defaultProps = {
    cards: []
};


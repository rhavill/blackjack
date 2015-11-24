import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {List} from 'immutable'

import Card from './Card';

export default class Table extends Component {

    getCards() {
        return this.props.deck;
    }

    render() {
        return <div>
             {this.getCards().map(card =>
                <ReactCSSTransitionGroup   key={card.get('id')}
                          transitionName="fadein"
                          transitionAppear={true}
                          transitionAppearTimeout={500}
                          transitionEnter={false}
                          transitionLeave={false}>
                    <Card key={card.get('id')} card={card} />
                </ReactCSSTransitionGroup>
            )}
        </div>;
    }
}

Table.defaultProps = {
    deck: List([])
};


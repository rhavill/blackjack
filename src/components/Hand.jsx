import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {List} from 'immutable'

import Card from './Card';

export default class Hand extends Component {

    render() {
        const style = {
            display:'flex',
            flexWrap:'wrap',
            justifyContent: 'center'
        };

        //console.log('hand', this.props.cards)
        return <div style={style}>
            {this.props.cards.map(card =>
                    <ReactCSSTransitionGroup   key={card.get('id')}
                                               transitionName="fadein"
                                               transitionAppear={true}
                                               transitionAppearTimeout={500}
                                               transitionEnter={false}
                                               transitionLeave={false}>
                        <Card key={card.get('id')} card={card} />
                    </ReactCSSTransitionGroup>
            )}
        </div>
    }

}

Hand.defaultProps = {
    cards: List([])
}
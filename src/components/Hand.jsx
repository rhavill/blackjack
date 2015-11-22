import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Card from './Card';

export default class Hand extends Component {

    render() {
        const style = {
            display:'flex',
            flexWrap:'wrap',
            justifyContent: 'center'
        };
        return <div style={style}>
            {this.props.cards.map(card =>
                    <ReactCSSTransitionGroup   key={card.id}
                                               transitionName="fadein"
                                               transitionAppear={true}
                                               transitionAppearTimeout={500}
                                               transitionEnter={false}
                                               transitionLeave={false}>
                        <Card key={card.id} {...card} />
                    </ReactCSSTransitionGroup>
            )}
        </div>
    }

}

Hand.defaultProps = {
    cards: []
}
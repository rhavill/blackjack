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
            <h1>hand</h1>
        </div>
    }

}

Hand.defaultProps = {
    cards: []
}
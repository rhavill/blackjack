import React, {Component} from 'react';
import {List} from 'immutable'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Result extends Component {

    render() {
        const style = {
            color:'white',
            position:'absolute',
            width:150,
            height: 70,
            top:'40%',
            left:'40%',
            zIndex: 4,
            backgroundColor: 'black'
        };

        return <div>
            <ReactCSSTransitionGroup   key={1}
                                       transitionName="fadein"
                                       transitionAppear={true}
                                       transitionAppearTimeout={1500}
                                       transitionEnter={false}
                                       transitionLeave={false}>
                <div style={style}>
                <h1 style={{position:'relative'}}>You Lose!</h1>
                </div>
            </ReactCSSTransitionGroup>
        </div>
    }

}

Result.defaultProps = {
    player: List(),
    dealer: List()
}
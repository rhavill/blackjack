import React, {Component} from 'react';
import {List} from 'immutable'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Result extends Component {

    render() {
        const style = {
        };

        return <div>
            <ReactCSSTransitionGroup   key={1}
                                       transitionName="fadein"
                                       transitionAppear={true}
                                       transitionAppearTimeout={1500}
                                       transitionEnter={false}
                                       transitionLeave={false}>
                <h1 style={{color:'white',position:'absolute',width:140,top:'40%',left:'40%'}}>You Win!</h1>
            </ReactCSSTransitionGroup>
        </div>
    }

}

Result.defaultProps = {
    player: List(),
    dealer: List()
}
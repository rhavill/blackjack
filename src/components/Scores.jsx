import React, {Component} from 'react';
import {List} from 'immutable'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Scores extends Component {

    render() {
        const style = {
            display:'flex',
            flexWrap:'wrap',
            justifyContent: 'center'
        };
        return <div style={style}>
            <ReactCSSTransitionGroup   key={1}
                                       transitionName="fadein"
                                       transitionAppear={true}
                                       transitionAppearTimeout={500}
                                       transitionEnter={false}
                                       transitionLeave={false}>
                <h3>scores</h3>
            {this.props.scores.map(score =>

                {<p>score</p>}
            )}
            </ReactCSSTransitionGroup>
        </div>
    }

}

Scores.defaultProps = {
    scores: List([])
}
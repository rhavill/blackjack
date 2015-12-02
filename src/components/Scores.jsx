import React, {Component} from 'react';
import {List} from 'immutable'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Scores extends Component {

    render() {
        const style = {
            display:'flex',
            flexWrap:'wrap',
            justifyContent: 'center',
            padding: '5px 5px 5px 5px'
        };

        const innerStyle = {
            fontSize: 30,
            backgroundColor: 'black',
            color: '#44d135',
            fontFamily: '"digital-7"',
            width: 90,
            textAlign: 'center',
            borderRadius: 6,
            border: '2px solid #44d135',
            height: 30,
            paddingTop: 5
        }
        return <div style={style}>
            <ReactCSSTransitionGroup   key={1}
                                       transitionName="fadein"
                                       transitionAppear={true}
                                       transitionAppearTimeout={500}
                                       transitionEnter={false}
                                       transitionLeave={false}>
            <div style={innerStyle}>{this.props.scores.join(' / ')}</div>
            </ReactCSSTransitionGroup>
        </div>
    }

}

Scores.defaultProps = {
    scores: List([])
}
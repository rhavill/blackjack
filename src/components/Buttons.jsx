import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Button from './Button';

export default class Buttons extends Component {

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

    getButtonAction(buttonKey) {
        return this.props[buttonKey];
    }

    render() {
        return <div>
            <ReactCSSTransitionGroup transitionName="fade"
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={300}>
                {this.getUsableButtons().map((key) => {
                    return <Button key={key} text={key}
                                   handleClick={this.getButtonAction(key)}/>
                })}
            </ReactCSSTransitionGroup>
        </div>
    }
}
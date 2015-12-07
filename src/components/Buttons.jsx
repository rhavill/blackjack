import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Button from './Button';

export default class Buttons extends Component {

    getUsableButtons() {
        switch (this.props.turn) {
            case null:
            case 'fini':
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
        const style = {
            display:'flex',
            flexWrap:'wrap',
            justifyContent: 'center'
        };
        return <div>
            <ReactCSSTransitionGroup style={style} transitionName="fade"
                                     transitionEnterTimeout={500}
                                     transitionLeave={false}>
                {this.getUsableButtons().map((key) => {
                    return <Button key={key} text={key}
                                   handleClick={this.getButtonAction(key)}/>
                })}
            </ReactCSSTransitionGroup>
        </div>
    }
}
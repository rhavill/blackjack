import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        return <div className="button">
            <div className="outer">
                <div className="height">
                    <div className="inner">{this.props.text}</div>
                </div>
            </div>
        </div>;
    }
}
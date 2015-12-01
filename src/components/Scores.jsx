import React, {Component} from 'react';
import {List} from 'immutable'


export default class Scores extends Component {

    render() {

        return <div>
            {this.props.scores.map(score =>
                    score
            )}
        </div>
    }

}

Scores.defaultProps = {
    scores: List([])
}
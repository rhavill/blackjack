import React, {Component} from 'react';
import {List} from 'immutable'


export default class Scores extends Component {

    render() {

        return <div><h3>scores</h3>
            {this.props.scores.map(score =>

                {<p>score</p>}
            )}
        </div>
    }

}

Scores.defaultProps = {
    scores: List([])
}
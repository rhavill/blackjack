import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Score extends React.Component {

    getScore () {
        let score = '';
        if ((typeof this.props.scores != 'undefined') &&
                (typeof this.props.scores[0] != 'undefined')) {
            score = this.props.scores[0].toString();
            if ((typeof this.props.scores[1] != 'undefined') &&
                (this.props.scores[1] <= 21)) {
                let score2 = this.props.scores[1];
                score += ' / ' + score2.toString();
            }
        }
        return score;
    }

    render() {
        let scoreStyle = {
            fontSize: '1.5em',
            fontWeight: 'bold'
        };
        return (
            <div className="score" style={scoreStyle}>
                {this.getScore()}
            </div>
        )
    }
}

Score.mixins = [PureRenderMixin];
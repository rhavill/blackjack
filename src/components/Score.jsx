import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Score extends React.Component {

    getScore () {
        let score = '';
        if ((typeof this.props.scores != 'undefined') &&
                (typeof this.props.scores[0] != 'undefined')) {
            score = this.props.scores[0].toString();
            if (score > 21) {
                score = 'Bust';
            }
            else if ((typeof this.props.scores[1] != 'undefined') &&
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
        let score = this.getScore();
        if (score == 'Bust') {
            scoreStyle.color = '#ff0000';
        }
        return (
            <div className="score" style={scoreStyle}>
                {score}
            </div>
        )
    }
}

Score.mixins = [PureRenderMixin];
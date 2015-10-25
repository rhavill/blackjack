import React from 'react/addons';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Blackjack = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    getCards: function() {
        return this.props.cards || [];
    },
    render: function() {
        return <div className="cards">
            <button onClick={() => this.props.shuffle()}>Shuffle</button>
            {this.getCards().map(card =>
                    <h1>{card.rank} of {card.suit}</h1>
            )}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        //cards: state.getIn(['vote', 'pair']),
        cards: state.get('deck').toJS()
    };
}

export const BlackjackContainer = connect(mapStateToProps, actionCreators)(Blackjack);
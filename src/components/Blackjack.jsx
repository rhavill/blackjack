import React from 'react/addons';
//import React from 'react/addons';
//require('react-addons-{addon}')
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Dealer from './Dealer';

export const Blackjack = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    getCards: function() {
        return this.props.cards || [];
    },
    render: function() {
        return <div className="cards">
            <button onClick={() => this.props.shuffle()}>Shuffle</button>
            <button onClick={() => this.props.deal()}>Deal</button>
            <Dealer/>
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
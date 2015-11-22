import React, {Component} from 'react';
import {connect} from 'react-redux'

import Blackjack from './Blackjack';
import * as actionCreators from '../action_creators';

class Root extends Component {
    render() {
        return <div>
            <Blackjack {...this.props} />
        </div>;
    }
}

function stateToProps(state) {
    return {
        turn: state.get('turn'),
        cards: state.get('deck')
    }
}

export default connect(stateToProps, actionCreators)(Root);
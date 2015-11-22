import React, {Component} from 'react';
import {connect} from 'react-redux'

import Table from './Table';
import * as actionCreators from '../action_creators';

class Blackjack extends Component {
    render() {
        return <div>
            <Table {...this.props} />
        </div>;
    }
}

function stateToProps(state) {
    return {
        turn: state.get('turn'),
        deck: state.get('deck')
    }
}

export default connect(stateToProps, actionCreators)(Blackjack);
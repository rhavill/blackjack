import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    findRenderedComponentWithType,
    scryRenderedComponentsWithType
}  from 'react-addons-test-utils';
import {List, fromJS} from 'immutable'

import Table from '../../src/components/Table';
import Buttons from '../../src/components/Buttons';
import Player from '../../src/components/Player'
import cards from '../../src/data/cards';

describe('Table', () => {

    it('has one Buttons component', () => {
        let deal = () => {};
        let component = renderIntoDocument(
            <Table turn="dealer" deal={deal} />
        );
        let buttons = findRenderedComponentWithType(component, Buttons);
        expect(buttons.props.turn).to.equal('dealer');
        expect(buttons.props.deal).to.equal(deal);
    });

    it('has two Player components', () => {
        let component = renderIntoDocument(
            <Table turn={null} />
        );
        let players = scryRenderedComponentsWithType(component, Player);
        expect(players.length).to.equal(2);
        expect(component.refs.dealer.props.isDealer).to.equal(true);
        expect(component.refs.player.props.isDealer).to.equal(false);
    });

    it('has scores', () => {
        let aceOfClubs = 0;
        let sixOfSpades = 44;
        let player = List([aceOfClubs, sixOfSpades])
        let component = renderIntoDocument(
            <Table turn="player" player={player} deck={cards} />
        );
        expect(component.getScores(player)).to.equal(fromJS([7, 17]))
    })

})
import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedComponentsWithType
}  from 'react-addons-test-utils';
import {List} from 'immutable'

import Card from '../../src/components/Card';
import Hand from '../../src/components/Hand'
import cards from '../../src/data/cards';

describe('Hand', () => {

    let sixOfSpades = cards.get(44);
    let jackOfClubs = cards.get(10);

    it('has no Cards by default', () => {
        let component = renderIntoDocument(
            <Hand />
        );
        let cards = scryRenderedComponentsWithType(component, Card);
        expect(cards.length).to.equal(0);
    });

    it('renders Card components from props.cards', () => {
        let component = renderIntoDocument(
            <Hand cards={List([sixOfSpades, jackOfClubs])} />
        );
        let cards = scryRenderedComponentsWithType(component, Card);
        expect(cards.length).to.equal(2);
    });

})
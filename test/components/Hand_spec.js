import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedComponentsWithType
}  from 'react-addons-test-utils';

import Card from '../../src/components/Card';
import Hand from '../../src/components/Hand'
import cards from '../../src/data/cards';

describe('Hand', () => {

    let sixOfSpaces = cards[44];
    let jackOfClubs = cards[10];

    it('has no Cards by default', () => {
        let component = renderIntoDocument(
            <Hand />
        );
        let cards = scryRenderedComponentsWithType(component, Card);
        expect(cards.length).to.equal(0);
    });

    it('renders Card components from props.cards', () => {
        let component = renderIntoDocument(
            <Hand cards={[sixOfSpaces, jackOfClubs]} />
        );
        let cards = scryRenderedComponentsWithType(component, Card);
        expect(cards.length).to.equal(2);
    });

})
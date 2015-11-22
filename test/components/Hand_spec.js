import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedComponentsWithType
}  from 'react-addons-test-utils';

import Card from '../../src/components/Card';
import Hand from '../../src/components/Hand'

describe('Hand', () => {

    it('has no Cards by default', () => {
        let component = renderIntoDocument(
            <Hand />
        );
        let cards = scryRenderedComponentsWithType(component, Card);
        expect(cards.length).to.equal(0);
    });

})
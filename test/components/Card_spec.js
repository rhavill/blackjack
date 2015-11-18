import React from 'react';
import {findDOMNode} from 'react-dom';
import Card from '../../src/components/Card';
import {expect} from 'chai';
import cards from '../../src/data/cards';
import {renderIntoDocument, findRenderedDOMComponentWithTag}
    from 'react-addons-test-utils';

describe('Card', () => {

    const aceOfDiamonds = cards[13];
    const fourOfHearts = cards[29];
    const jackOfClubs = cards[10];

    it('renders a div with "face-down" background', () => {
        const component = renderIntoDocument(
            <Card {...aceOfDiamonds} />
        );
        const div = findRenderedDOMComponentWithTag(component, 'div');
        expect(findDOMNode(div).style.getPropertyValue('background-image')).to.equal('url(cards.png)');
        expect(findDOMNode(div).style.getPropertyValue('background-position')).to.equal('0px 123px');
    });

})
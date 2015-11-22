import React from 'react';
import {findDOMNode} from 'react-dom';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

import Card from '../../src/components/Card';
import cards from '../../src/data/cards';

describe('Card', () => {

    let aceOfDiamonds = cards[13];
    let fourOfHearts = cards[29];
    let jackOfClubs = cards[10];

    it('renders some divs', () => {
        const component = renderIntoDocument(
            <Card {...aceOfDiamonds} />
        );
        const divs = scryRenderedDOMComponentsWithTag(component, 'div');
        let classes = [];
        divs.map((div) => {
            classes.push(div.className);
        });
        expect(classes[0]).to.equal('card-container');
        expect(classes[1]).to.contain('card');
        expect(classes[2]).to.equal('back');
        expect(classes[3]).to.equal('front');
        expect(divs.length).to.equal(4);
        expect(findDOMNode(divs[2]).style.getPropertyValue('background-position')).to.equal('0px 123px');
        expect(findDOMNode(divs[3]).style.getPropertyValue('background-position')).to.equal('0px -123px');
    });

    it('renders correct background image position', () => {
        aceOfDiamonds.isFaceUp = true;
        const ace = renderIntoDocument(
            <Card {...aceOfDiamonds} />
        );
        let divs = scryRenderedDOMComponentsWithTag(ace, 'div');
        expect(findDOMNode(divs[3]).style.getPropertyValue('background-position')).to.equal('0px -123px');

        fourOfHearts.isFaceUp = true;
        const four = renderIntoDocument(
            <Card {...fourOfHearts} />
        );
        divs = scryRenderedDOMComponentsWithTag(four, 'div');
        expect(findDOMNode(divs[3]).style.getPropertyValue('background-position')).to.equal('-237px -246px');

        jackOfClubs.isFaceUp = true;
        const jack = renderIntoDocument(
            <Card {...jackOfClubs} />
        );
        divs = scryRenderedDOMComponentsWithTag(jack, 'div');
        expect(findDOMNode(divs[3]).style.getPropertyValue('background-position')).to.equal('-790px 0px');
    });

})
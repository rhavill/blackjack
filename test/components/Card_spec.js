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

    let aceOfDiamonds = cards.get(13);
    let fourOfHearts = cards.get(29);
    let jackOfClubs = cards.get(10);

    it('renders some divs', () => {
        const component = renderIntoDocument(
            <Card card={aceOfDiamonds} />
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
        let aceOfDiamondsUp = aceOfDiamonds.set('isFaceUp', true)
        const ace = renderIntoDocument(
            <Card card={aceOfDiamondsUp} />
        );
        let divs = scryRenderedDOMComponentsWithTag(ace, 'div');
        expect(findDOMNode(divs[3]).style.getPropertyValue('background-position')).to.equal('0px -123px');

        fourOfHearts.isFaceUp = true;
        const four = renderIntoDocument(
            <Card card={fourOfHearts} />
        );
        divs = scryRenderedDOMComponentsWithTag(four, 'div');
        expect(findDOMNode(divs[3]).style.getPropertyValue('background-position')).to.equal('-237px -246px');

        jackOfClubs.isFaceUp = true;
        const jack = renderIntoDocument(
            <Card card={jackOfClubs} />
        );
        divs = scryRenderedDOMComponentsWithTag(jack, 'div');
        expect(findDOMNode(divs[3]).style.getPropertyValue('background-position')).to.equal('-790px 0px');
    });

})
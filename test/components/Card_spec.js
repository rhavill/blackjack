import React from 'react';
import {findDOMNode} from 'react-dom';
import Card from '../../src/components/Card';
import {expect} from 'chai';
import cards from '../../src/data/cards';
import {renderIntoDocument, findRenderedDOMComponentWithTag}
    from 'react-addons-test-utils';

describe('Card', () => {

    let aceOfDiamonds = cards[13];
    let fourOfHearts = cards[29];
    let jackOfClubs = cards[10];

    it('renders a div with "face-down" background', () => {
        const component = renderIntoDocument(
            <Card {...aceOfDiamonds} />
        );
        const div = findRenderedDOMComponentWithTag(component, 'div');
        expect(findDOMNode(div).style.getPropertyValue('background-image')).to.equal('url(cards.png)');
        expect(findDOMNode(div).style.getPropertyValue('background-position')).to.equal('0px 123px');
    });

    it('floats left', () => {
        const component = renderIntoDocument(
            <Card {...aceOfDiamonds} />
        );
        const div = findRenderedDOMComponentWithTag(component, 'div');
        expect(findDOMNode(div).style.getPropertyValue('float')).to.equal('left');
    });

    it('renders correct background image position', () => {
        aceOfDiamonds.isFaceUp = true;
        const ace = renderIntoDocument(
            <Card {...aceOfDiamonds} />
        );
        let div = findRenderedDOMComponentWithTag(ace, 'div');
        expect(findDOMNode(div).style.getPropertyValue('background-position')).to.equal('0px -123px');

        fourOfHearts.isFaceUp = true;
        const four = renderIntoDocument(
            <Card {...fourOfHearts} />
        );
        div = findRenderedDOMComponentWithTag(four, 'div');
        expect(findDOMNode(div).style.getPropertyValue('background-position')).to.equal('-237px -246px');

        jackOfClubs.isFaceUp = true;
        const jack = renderIntoDocument(
            <Card {...jackOfClubs} />
        );
        div = findRenderedDOMComponentWithTag(jack, 'div');
        expect(findDOMNode(div).style.getPropertyValue('background-position')).to.equal('-790px 0px');
    });

})
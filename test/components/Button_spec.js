import React from 'react';
import {findDOMNode} from 'react-dom';
import Button from '../../src/components/Button';
import {expect} from 'chai';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate}
    from 'react-addons-test-utils';

describe('Button', () => {

    it('renders some divs', () => {
        const component = renderIntoDocument(
            <Button text="hello" />
        );
        const divs = scryRenderedDOMComponentsWithTag(component, 'div');
        expect(divs.length).to.equal(4);
        expect(divs[0].textContent).to.equal('hello');
        expect(divs[0].className).to.equal('button');
        expect(divs[1].className).to.equal('outer');
        expect(divs[2].className).to.equal('height');
        expect(divs[3].className).to.equal('inner');
    });

    it('calls handleClick when clicked', () => {
        let result;
        const handleClick = () => result = 'clicked';
        const component = renderIntoDocument(
            <Button handleClick={handleClick} />
        );
        const divs = scryRenderedDOMComponentsWithTag(component, 'div')
        Simulate.click(divs[0]);
        expect(result).to.equal('clicked');
    });
})
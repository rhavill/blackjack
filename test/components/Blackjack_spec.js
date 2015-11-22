import React from 'react';
import {findDOMNode} from 'react-dom';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    scryRenderedComponentsWithType
}  from 'react-addons-test-utils';

import Blackjack from '../../src/components/Blackjack';
import Button from '../../src/components/Button';

describe('Blackjack', () => {

    it('renders the correct buttons for each turn', () => {
        let component = renderIntoDocument(
            <Blackjack turn={null} />
        );
        let buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(1);
        let divs = scryRenderedDOMComponentsWithTag(buttons[0], 'div');
        expect(divs[0].textContent).to.equal('deal');

        component = renderIntoDocument(
            <Blackjack turn={'player'} />
        );
        buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(2);
        divs = scryRenderedDOMComponentsWithTag(buttons[0], 'div');
        expect(divs[0].textContent).to.equal('hit');
        divs = scryRenderedDOMComponentsWithTag(buttons[1], 'div');
        expect(divs[0].textContent).to.equal('stay');

        component = renderIntoDocument(
            <Blackjack turn={'dealer'} />
        );
        buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(0);

        component = renderIntoDocument(
            <Blackjack turn={'fini'} />
        );
        buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(0);
    });

})
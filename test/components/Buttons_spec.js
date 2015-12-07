import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    scryRenderedComponentsWithType
}  from 'react-addons-test-utils';

import Buttons from '../../src/components/Buttons';
import Button from '../../src/components/Button';

describe('Buttons', () => {

    it('renders the correct buttons for each turn', () => {
        let component = renderIntoDocument(
            <Buttons turn={null} />
        );
        let buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(1);
        let divs = scryRenderedDOMComponentsWithTag(buttons[0], 'div');
        expect(divs[0].textContent).to.equal('deal');

        component = renderIntoDocument(
            <Buttons turn={'player'} />
        );
        buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(2);
        divs = scryRenderedDOMComponentsWithTag(buttons[0], 'div');
        expect(divs[0].textContent).to.equal('hit');
        divs = scryRenderedDOMComponentsWithTag(buttons[1], 'div');
        expect(divs[0].textContent).to.equal('stay');

        component = renderIntoDocument(
            <Buttons turn={'dealer'} />
        );
        buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(0);

        component = renderIntoDocument(
            <Buttons turn={'fini'} />
        );
        buttons = scryRenderedComponentsWithType(component, Button);
        expect(buttons.length).to.equal(1);
        divs = scryRenderedDOMComponentsWithTag(buttons[0], 'div');
        expect(divs[0].textContent).to.equal('deal');
    });

})
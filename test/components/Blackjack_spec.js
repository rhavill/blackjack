import React from 'react/addons';
import {Blackjack} from '../../src/components/Blackjack';
import {expect} from 'chai';
import cards from '../../src/data/cards';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag}
    = React.addons.TestUtils;

describe('Blackjack', () => {

    it('renders some buttons', () => {
        const component = renderIntoDocument(
            <Blackjack cards={cards} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(1);
        expect(buttons[0].textContent).to.equal('Shuffle');
        //expect(buttons[1].textContent).to.equal('28 Days Later');
    });

});
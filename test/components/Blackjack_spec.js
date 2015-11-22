import React from 'react';
import {findDOMNode} from 'react-dom';
import {expect} from 'chai';
import {
    renderIntoDocument,
    findRenderedComponentWithType,
}  from 'react-addons-test-utils';

import Blackjack from '../../src/components/Blackjack';
import Buttons from '../../src/components/Buttons';

describe('Blackjack', () => {

    it('has one Buttons component', () => {
        let deal = () => {};
        let component = renderIntoDocument(
            <Blackjack turn="dealer" deal={deal} />
        );
        let buttons = findRenderedComponentWithType(component, Buttons);
        expect(buttons.props.turn).to.equal('dealer');
        expect(buttons.props.deal).to.equal(deal);
    });

})
import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    findRenderedComponentWithType
}  from 'react-addons-test-utils';

import Player from '../../src/components/Player';
import Hand from '../../src/components/Hand'

describe('Player', () => {

    it('has one Hand component', () => {
        let component = renderIntoDocument(
            <Player isDealer={true} />
        );
        let hand = findRenderedComponentWithType(component, Hand);
    });

})
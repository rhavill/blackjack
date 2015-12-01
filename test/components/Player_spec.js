import React from 'react';
import {List} from 'immutable'
import {expect} from 'chai';
import {
    renderIntoDocument,
    findRenderedComponentWithType,
    scryRenderedComponentsWithType
}  from 'react-addons-test-utils';

import Player from '../../src/components/Player';
import Hand from '../../src/components/Hand'
import Scores from '../../src/components/Scores'

describe('Player', () => {

    it('has one Hand component', () => {
        let component = renderIntoDocument(
            <Player isDealer={true} />
        );
        let hand = findRenderedComponentWithType(component, Hand);
    });

    it('has one Scores component with scores', () => {
        let component = renderIntoDocument(
            <Player isDealer={true} />
        );
        let scores = scryRenderedComponentsWithType(component, Scores);
        expect(scores.length).to.equal(0)

        let playerScores = List([6, 17])
        component = renderIntoDocument(
            <Player scores={playerScores} />
        );
        scores = scryRenderedComponentsWithType(component, Scores);
        expect(scores.length).to.equal(1)
    });

})
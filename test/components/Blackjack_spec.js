import React from 'react/addons';
import {Blackjack} from '../../src/components/Blackjack';
import {expect} from 'chai';
import cards from '../../src/data/cards';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate, scryRenderedDOMComponentsWithClass}
    = React.addons.TestUtils;

describe('Blackjack', () => {

    it('renders some buttons', () => {
        const component = renderIntoDocument(
            <Blackjack cards={cards} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(4);
        expect(buttons[0].textContent).to.equal('Shuffle');
        expect(buttons[1].textContent).to.equal('Deal');
        expect(buttons[2].textContent).to.equal('Hit');
        expect(buttons[3].textContent).to.equal('Stay');
        //console.log('dis'+buttons[3].props.disabled)
    });

    it('hides some buttons', () => {
        const component = renderIntoDocument(
            <Blackjack cards={cards} turn="dealer" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons[0].attributes.getNamedItem('disabled')).to.equal(null);
        expect(buttons[1].attributes.getNamedItem('disabled')).to.equal(null);
        expect(buttons[2].attributes.getNamedItem('disabled').name).to.equal('disabled');
        expect(buttons[3].attributes.getNamedItem('disabled').name).to.equal('disabled');
    });

    it('invokes callback when Shuffle button is clicked', () => {
        let isShuffled = false;
        const shuffle = () => isShuffled = true;

        const component = renderIntoDocument(
            <Blackjack cards={cards} shuffle={shuffle} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(isShuffled).to.equal(true);
    });

    it('invokes callback when Deal button is clicked', () => {
        let didRun = false;
        const run = () => didRun = true;

        const component = renderIntoDocument(
            <Blackjack cards={cards} deal={run} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[1]);

        expect(didRun).to.equal(true);
    });

    it('invokes callback when Hit button is clicked', () => {
        let didRun = false;
        const run = () => didRun = true;

        const component = renderIntoDocument(
            <Blackjack cards={cards} hit={run} turn="player" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[2]);

        expect(didRun).to.equal(true);
    });

    it('invokes callback when Stay button is clicked', () => {
        let didRun = false;
        const run = () => didRun = true;

        const component = renderIntoDocument(
            <Blackjack cards={cards} stay={run}  turn="player" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[3]);

        expect(didRun).to.equal(true);
    });

    it('renders player cards if they exist.', () => {
        const deck = [
            {rank: 'A', suit: 'C'},
            {rank: '4', suit: 'S'},
            {rank: '10', suit: 'D'},
            {rank: '2', suit: 'H'},
            {rank: 'Q', suit: 'C'}
        ];
        const dealerCards = [
            {rank: '2', suit: 'H', isFaceUp: true},
            {rank: '3', suit: 'H', isFaceUp: true}
        ];
        const playerCards = [
            {rank: '4', suit: 'H', isFaceUp: true},
            {rank: '5', suit: 'H', isFaceUp: false}
        ];
        const component = renderIntoDocument(
            <Blackjack cards={deck} dealerCards={dealerCards} playerCards={playerCards} />
        );
        const cards = scryRenderedDOMComponentsWithClass(component, 'card');
        expect(cards.length).to.equal(4);

        const faceUpCards = scryRenderedDOMComponentsWithClass(component, 'front');
        expect(faceUpCards.length).to.equal(3);
    })
});
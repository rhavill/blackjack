import React from 'react';
import ReactDOM from 'react-dom';
import Blackjack from './components/Blackjack';

const cards = [
    {rank: 'A', suit: 'S'},
    {rank: 'Q', suit: 'C'}
];

ReactDOM.render(
<Blackjack cards={cards} />,
    document.getElementById('blackjack')
);
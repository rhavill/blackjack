import React from 'react';
import ReactDOM from 'react-dom';
import Blackjack from './components/Blackjack';
import cards from './data/cards';

ReactDOM.render(
<Blackjack cards={cards} />,
    document.getElementById('blackjack')
);
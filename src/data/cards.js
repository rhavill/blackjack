let cards = [];

['C', 'D', 'H', 'S'].map(function(suit) {
    ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
            .map(function(rank) {
        cards.push({rank: rank, suit: suit});
    });


});

export default cards;
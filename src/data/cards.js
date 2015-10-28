let cards = [];

['C', 'D', 'H', 'S'].map(function(suit) {
    ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
            .map(function(rank) {
        cards.push({rank: rank, suit: suit});
    });


});

export default cards;

export let pointValue = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'A': [1, 11]
};

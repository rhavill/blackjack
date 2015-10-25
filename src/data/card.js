export function suitSymbol(suit) {
    switch (suit) {
        case 'C':
            return '♣';
        case 'D':
            return '♦';
        case 'H':
            return '♥';
        case 'S':
            return '♠';
    }
    return '?';
}
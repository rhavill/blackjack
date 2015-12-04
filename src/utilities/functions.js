import {List} from 'immutable'

export function getScores(deck, cardIndexes) {
    let aceCount = 0, minScore = 0;
    cardIndexes.map((index) => {
        let card = deck.get(index)
        if (card.get('rank') == 'A') {
            aceCount++
        }
        minScore += card.get('points')
    })
    let scores = minScore ? [minScore] : []
    if (minScore > 21) {
        scores = ['BUST']
    }
    if (aceCount) {
        if (minScore < 12) {
            scores.push(minScore + 10)
        }
        if (aceCount == 3 && cardIndexes.size == 3) {
            scores.push(21)
        }
    }
    return List(scores);
}
import {dealerShow, dealerTurn,resetDeck} from './action_creators';

export default store => next => action => {

    let returnValue = next(action);

    let state = store.getState();
    let turn = state.get('turn');

    if (['DEAL', 'HIT', 'STAY'].indexOf(action.type) > -1) {
        if (turn == 'dealer') {
            setTimeout(function () {
                store.dispatch(dealerShow());
            }, 1200);
        }
    }

    if (['DEALER_SHOW', 'DEALER_TURN'].indexOf(action.type) > -1) {
        if (turn == 'dealer') {
            setTimeout(function () {
                store.dispatch(dealerTurn());
            }, 1200);
        }
        else if (turn == 'fini') {
            store.dispatch(resetDeck());
        }
    }

    return returnValue;

}


import {dealerTurn} from './action_creators';

export default store => next => action => {
    let returnValue = next(action);

    if (['DEAL', 'HIT', 'STAY', 'DEALER_TURN'].indexOf(action.type) > -1) {
        let state = store.getState();
        let turn = state.get('turn');
        if (turn == 'dealer') {
            setTimeout(function () {
                store.dispatch(dealerTurn());
            }, 1200);
        }
    }
    return returnValue;
}


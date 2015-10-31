import {dealerTurn} from './action_creators';

export default store => dispatch => action => {

    dispatch(action);

    if (['DEAL', 'HIT', 'STAY'].indexOf(action.type) > -1) {
        let state = store.getState();
        if (state.get('turn') == 'dealer') {
            setTimeout(function () {
                dispatch(dealerTurn());
            }, 1200);
        }
    }

}
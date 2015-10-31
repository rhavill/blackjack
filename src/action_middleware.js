import {dealerTurn} from './action_creators';

export default store => dispatch => action => {
    dispatch(action);

    let state = store.getState();
    switch (action.type) {
        case 'DEAL':
            if (state.get('turn') == 'dealer') {
                setTimeout(function() {
                    dispatch(dealerTurn());
                }, 800);
            }
            break;
        case 'HIT':
            if (state.get('turn') == 'dealer') {
                setTimeout(function() {
                    dispatch(dealerTurn());
                }, 800);
            }
            break;
    }
}
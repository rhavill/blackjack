import {dealerTurn} from './action_creators';

export default store => dispatch => action => {
    dispatch(action);

    switch (action.type) {
        case 'DEAL':
            let state = store.getState();
            if (state.get('turn') == 'dealer') {
                dispatch(dealerTurn());
            }
            break;
    }
}
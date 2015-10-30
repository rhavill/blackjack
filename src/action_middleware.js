export default store => dispatch => action => {
    console.log('in middleware', action);
    return dispatch(action);
}
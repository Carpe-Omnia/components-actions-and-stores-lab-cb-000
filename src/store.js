import { renderApp } from './index.js'

<<<<<<< HEAD
 const createStore = (reducer) => {
=======
export const createStore = (reducer) => {
>>>>>>> ef6efd94b7e7ec4d2619440398b2e93ba8d85fc7
    let state;
    let listeners = [];
    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    };

    const subscribe = (listener) => {
        listeners.push(listener);
    };

    dispatch({});
    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
}
<<<<<<< HEAD
export default createStore ;
=======
>>>>>>> ef6efd94b7e7ec4d2619440398b2e93ba8d85fc7

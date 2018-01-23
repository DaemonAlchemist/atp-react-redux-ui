
import {o} from "atp-sugar";

//Action type definitions
export const TOGGLE_SHOW = 'atp-ui/toggle/show';
export const TOGGLE_HIDE = 'atp-ui/toggle/hide';
export const TOGGLE_TOGGLE = 'atp-ui/toggle/toggle';

//Action creators and selectors
export const toggle = {
    show: name => ({type: TOGGLE_SHOW, name}),
    hide: name => ({type: TOGGLE_HIDE, name}),
    toggle: (name, defaultState = false) => ({type: TOGGLE_TOGGLE, name, defaultState}),
    isVisible: (getState, name, defaultState = false) => isVisible(getState().ui.toggle, name, defaultState)
}

const isVisible = (state, name, defaultState = false) => typeof state[name] !== 'undefined'
    ? state[name]
    : defaultState;

//Reducer
export default (state = {}, action) => o(action.type).switch({
    [TOGGLE_SHOW]: () => o(state).merge({[action.name]: true}).raw,
    [TOGGLE_HIDE]: () => o(state).merge({[action.name]: false}).raw,
    [TOGGLE_TOGGLE]: () => o(state).merge({[action.name]: !isVisible(state, action.name, action.defaultState)}).raw,
    default: () => state,
});

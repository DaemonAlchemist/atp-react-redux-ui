
import {merge, switchOn, remove} from "atp-pointfree";

//Action type definitions
export const RADIO_SET = 'atp-ui/radio/set';
export const RADIO_CLEAR = 'atp-ui/radio/clear';

//Action creators and selectors
export const radio = {
    set: (name, value) => ({type: RADIO_SET, name, value}),
    clear: name => ({type: RADIO_CLEAR, name}),
    value: (getState, name) => getState().ui.radio[name] || null
};

//Reducer
export default (state = {}, action) => switchOn(action.type, {
    [RADIO_SET]: () => merge(state, {[action.name]: action.value}),
    [RADIO_CLEAR]: () => remove(action.name)(state),
    default: () => state,
});

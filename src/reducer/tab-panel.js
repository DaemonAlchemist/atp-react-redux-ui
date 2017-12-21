
import {o} from "atp-sugar";

export const ADD_TAB = "ui/tab-panel/add";
export const REMOVE_TAB = 'ui/tab-panel/remove';
export const SELECT_TAB = 'ui/tab-panel/select';

export default (state = {}, action) =>
    o(action.type).switch({
        [ADD_TAB]:    () =>
            o(state).merge(
                state[action.tab.id()] ? {} : {[action.tab.id()]: action.tab}
            ).map(
                tab => o(tab).merge({active: action.tab.id() === tab.id()}).raw
            ).raw,
        [REMOVE_TAB]: () => o(state).filter((_, key) => key !== action.tabId).raw,
        [SELECT_TAB]: () => o(state).map(tab => o(tab).merge({active: action.tabId === tab.id()}).raw).raw,
        default:      () => state
    });

export const addTab = tab => ({type: ADD_TAB, tab});
export const removeTab = tabId => ({type: REMOVE_TAB, tabId});
export const selectTab = tabId => ({type: SELECT_TAB, tabId});

/**
 * Created by Andy on 3/21/2017.
 */

export const ADD_TAB = "ui/tab-panel/add";
export const REMOVE_TAB = 'ui/tab-panel/remove';
export const SELECT_TAB = 'ui/tab-panel/select';

export default (state = {}, action) =>
    action.type.$switch({
        [ADD_TAB]:    () =>
            state.$merge(
                state[action.tab.id()] ? {} : {[action.tab.id()]: action.tab}
            ).$map(
                tab => tab.$merge({active: action.tab.id() === tab.id()})
            ),
        [REMOVE_TAB]: () => state.$filter((_, key) => key !== action.tabId),
        [SELECT_TAB]: () => state.$map(tab => tab.$merge({active: action.tabId === tab.id()})),
        default:      () => state
    });

export const addTab = tab => ({type: ADD_TAB, tab});
export const removeTab = tabId => ({type: REMOVE_TAB, tabId});
export const selectTab = tabId => ({type: SELECT_TAB, tabId});

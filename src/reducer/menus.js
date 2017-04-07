/**
 * Created by Andy on 3/21/2017.
 */

export const ADD_MENU = "ui/menu/add";
export const REMOVE_MENU = 'ui/menu/remove';

export default (state = {}, action) =>
    action.type.$switch({
        [ADD_MENU]:    () => state.$merge(action.menu),
        [REMOVE_MENU]: () => state,
        default:      () => state
    });

export const addMenu = menu => ({type: ADD_MENU, menu});
export const removeMenu = menuPath => ({type: REMOVE_MENU, menuPath});

/**
 * Created by Andy on 3/21/2017.
 */

import {o} from "atp-sugar";

export const ADD_MENU = "ui/menu/add";
export const REMOVE_MENU = 'ui/menu/remove';

export default (state = {}, action) =>
    o(action.type).switch({
        [ADD_MENU]:    () => o(state).merge(action.menu).raw,
        [REMOVE_MENU]: () => state,
        default:      () => state
    });

export const addMenu = menu => ({type: ADD_MENU, menu});
export const removeMenu = menuPath => ({type: REMOVE_MENU, menuPath});

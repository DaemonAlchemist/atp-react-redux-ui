/**
 * Created by Andy on 3/21/2017.
 */

import {combineReducers} from "redux";

import tabPanel from "./reducer/tab-panel";
import menus from "./reducer/menus";

export default combineReducers({
    tabPanel,
    menus
});

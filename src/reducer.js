
import {combineReducers} from "redux";

import tabPanel from "./reducer/tab-panel";
import menus from "./reducer/menus";
import toggle from "./reducer/toggle";

export default combineReducers({
    tabPanel,
    menus,
    toggle
});

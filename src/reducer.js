
import {combineReducers} from "redux";

import tabPanel from "./reducer/tab-panel";
import menus from "./reducer/menus";
import toggle from "./reducer/toggle";
import paginator from "./reducer/paginator";

export default combineReducers({
    tabPanel,
    menus,
    paginator,
    toggle
});

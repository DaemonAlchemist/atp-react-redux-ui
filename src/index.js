/**
 * Created by Andy on 3/21/2017.
 */

import ui from "./reducer";
import Navbar from "./containers/Navbar";
import TabPanel from "./containers/TabPanel";
import Assigner from "./components/Assigner";

import {addTab, removeTab, selectTab} from "./reducer/tab-panel";

export default {
    reducers: {
        ui
    }
};

export {Assigner, Navbar, TabPanel, addTab, removeTab, selectTab};

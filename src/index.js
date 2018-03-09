
import ui from "./reducer";
import Navbar from "./containers/Navbar";
import TabPanel from "./containers/TabPanel";
import FileInput from "./containers/FileInput";
import {encodeFile} from "./containers/FileInput";
import Assigner from "./containers/Assigner";
import Breadcrumb from "./components/Breadcrumb";
import {toggle} from './reducer/toggle';
import DeleteButton from './containers/DeleteButton';

import {addTab, removeTab, selectTab} from "./reducer/tab-panel";

export default {
    reducers: {
        ui
    }
};

export {Assigner, Breadcrumb, DeleteButton, Navbar, TabPanel, FileInput, addTab, removeTab, selectTab, encodeFile, toggle};

/**
 * Created by Andy on 3/22/2017.
 */

import TabPanel from "../components/tab-panel";
import {connect} from "react-redux";

export default connect(
    state => ({tabPanel: state.ui.tabPanel}),
    dispatch => ({dispatch})
)(TabPanel);

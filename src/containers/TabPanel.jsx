
import TabPanel from "../components/tab-panel";
import {connect} from "react-redux";

export default connect(
    state => ({tabPanel: state.ui.tabPanel}),
    dispatch => ({dispatch})
)(TabPanel);

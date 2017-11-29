import Navbar from "../components/nav-bar";
import {connect} from "react-redux";

export default connect(
    (state, props) => ({
        leftMenu: state.ui.menus[props.leftMenu],
        rightMenu: state.ui.menus[props.rightMenu],
        permissions: state.uac.profile.permissions
    }),
    (dispatch, props) => ({
        dispatch,
        onClick: item => () => {
            if(typeof item.onClick !== 'undefined') {
                item.onClick(dispatch);
            }
        }
    })
)(Navbar);

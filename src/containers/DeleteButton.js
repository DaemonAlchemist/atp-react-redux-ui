
import DeleteButton from "../components/delete-button";
import {connect} from "react-redux";
import {toggle} from "../reducer/toggle";
import {get} from 'atp-pointfree';

export default connect(
    (state, props) => ({
        isPanelVisible: toggle.isVisible(get(state), props.id),
        message: props.message || "Are you sure?",
        text: props.text || "",
        confirmText: props.confirmText || "Delete",
        cancelText: props.cancelText || "Cancel",
        width: props.width || "150px"
        size: props.size || "regular"
    }),
    (dispatch, props) => ({
        showPanel: () => dispatch(toggle.show(props.id)),
        hidePanel: () => dispatch(toggle.hide(props.id)),
        performAction: () => {
            dispatch(toggle.hide(props.id));
            props.onClick();
        }
    })
)(DeleteButton);


import {connect} from 'react-redux';
import Paginator from "../components/Paginator";
import {paginator} from "../reducer/paginator";
import {get} from 'atp-pointfree';

export default connect(
    (state, props) => ({
        page: paginator.get(get(state), props.name).page,
        totalPages: paginator.get(get(state), props.name).pages
    }),
    (dispatch, props) => ({
        onClick: page => () => {
            dispatch(paginator.setPage(props.name, page));
        }
    })
)(Paginator);
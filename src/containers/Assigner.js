
import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import {compose} from 'atp-pointfree';
import Assigner from "../components/Assigner";
import {a} from 'atp-sugar';

const redux = connect(
    (state, props) => {
        const values = getFormValues(props.formId)(state);
        const search = values ? values.search : "";
        const partitioned = a(a(props.available
            .filter(a => !search || a.name.indexOf(search) >= 0))
            .sortBy('name'))
            .partition(a => props.assigned.map(a => a.id).includes(a.id))
            .raw;
        return {
            form: props.formId,
            available: partitioned[false] || [],
            assigned:  partitioned[true] || [],
        };
    },
    (dispatch, props) => ({

    })
);

export default compose(redux, reduxForm({}))(Assigner);

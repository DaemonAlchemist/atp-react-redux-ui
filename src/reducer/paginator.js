
import {o} from "atp-sugar";

//Action type definitions
export const SET_PAGE_COUNT = 'atp-ui/paginator/setCount';
export const SET_PAGE = 'atp-ui/paginator/setPage';

//Action creators and selectors
export const paginator = {
    setPageCount: (name, count) => ({type: SET_PAGE_COUNT, name, count}),
    setPage: (name, page) => ({type: SET_PAGE, name, page}),
    get: (getState, name) => getPaginatorData(getState().ui.paginator, name)
}

const getPaginatorData = (state, name) => typeof state[name] !== 'undefined'
    ? state[name]
    : {page: 1, pages: 1};

//Reducer
export default (state = {}, action) => o(action.type).switch({
    [SET_PAGE_COUNT]: () => o(state).merge({
        [action.name]: o(getPaginatorData(state, action.name)).merge({pages: action.count}).raw
    }).raw,
    [SET_PAGE]: () => o(state).merge({
        [action.name]: o(getPaginatorData(state, action.name)).merge({page: action.page}).raw
    }).raw,
    default: () => state,
});
